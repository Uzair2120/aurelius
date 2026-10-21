/* ==========================================================================
   AURELIUS QUANTITATIVE SYSTEMS — GLOBAL CORE ENGINE (main.js)
   Theme Switcher, Telemetry Clocks, Cmd+K Palette, Audio Sim, Tabs & Nav
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  AureliusCore.init();
});

const AureliusCore = {
  currentTheme: "light",
  currentCurrency: "USD",
  cmdSelectedIndex: 0,
  cmdFilteredItems: [],

  init() {
    this.initTheme();
    this.initCurrency();
    this.initTelemetryClocks();
    this.initCommandPalette();
    this.initNavigation();
    this.initTabs();
    this.initAccordions();
    this.initGlobalInteractiveWidgets();
  },

  /* ==========================================================================
     THEME MANAGEMENT (Light / Dark)
     ========================================================================== */
  initTheme() {
    const savedTheme = localStorage.getItem("aurelius_theme");
    const initialTheme = savedTheme === "obsidian" || savedTheme === "dark" ? "obsidian" : "light";
    this.setTheme(initialTheme);

    const toggleButtons = document.querySelectorAll(".theme-toggle-btn");
    toggleButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const nextTheme = this.currentTheme === "light" ? "obsidian" : "light";
        this.setTheme(nextTheme);
      });
    });
  },

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("aurelius_theme", theme);

    // Update toggle buttons text/label
    const toggleButtons = document.querySelectorAll(".theme-toggle-btn");
    toggleButtons.forEach(btn => {
      const label = btn.querySelector(".theme-label");
      if (label) {
        label.textContent = theme === "light" ? "DARK" : "LIGHT";
      }
    });

    // Notify any active canvas visualizations that theme changed
    window.dispatchEvent(new CustomEvent("aurelius:theme-changed", { detail: { theme } }));
  },

  /* ==========================================================================
     CURRENCY PREFERENCE MANAGEMENT
     ========================================================================== */
  initCurrency() {
    this.currentCurrency = localStorage.getItem("aurelius_currency") || "USD";
    
    // Bind currency selector dropdowns if present on page
    const currencySelectors = document.querySelectorAll(".currency-select");
    currencySelectors.forEach(select => {
      select.value = this.currentCurrency;
      select.addEventListener("change", (e) => {
        this.setCurrency(e.target.value);
      });
    });
  },

  setCurrency(currCode) {
    if (!AureliusData.currencies[currCode]) return;
    this.currentCurrency = currCode;
    localStorage.setItem("aurelius_currency", currCode);

    // Update all bound selectors
    document.querySelectorAll(".currency-select").forEach(sel => {
      sel.value = currCode;
    });

    // Dispatch global event for pages (e.g. client terminal, simulator)
    window.dispatchEvent(new CustomEvent("aurelius:currency-changed", { detail: { currency: currCode } }));
  },

  /* ==========================================================================
     LIVE TELEMETRY CLOCKS (UTC / ZRH / SGP / NYC)
     ========================================================================== */
  initTelemetryClocks() {
    const updateClocks = () => {
      const now = new Date();

      const formatTime = (timeZone) => {
        return new Intl.DateTimeFormat("en-GB", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(now);
      };

      const utcTime = formatTime("UTC");
      const zrhTime = formatTime("Europe/Zurich");
      const sgpTime = formatTime("Asia/Singapore");
      const nycTime = formatTime("America/New_York");

      const clockUtcEl = document.getElementById("clock-utc");
      const clockZrhEl = document.getElementById("clock-zrh");
      const clockSgpEl = document.getElementById("clock-sgp");
      const clockNycEl = document.getElementById("clock-nyc");

      if (clockUtcEl) clockUtcEl.textContent = utcTime;
      if (clockZrhEl) clockZrhEl.textContent = zrhTime;
      if (clockSgpEl) clockSgpEl.textContent = sgpTime;
      if (clockNycEl) clockNycEl.textContent = nycTime;
    };

    updateClocks();
    setInterval(updateClocks, 1000);
  },

  /* ==========================================================================
     COMMAND PALETTE (Cmd + K / Ctrl + K)
     ========================================================================== */
  initCommandPalette() {
    const backdrop = document.getElementById("cmd-palette");
    if (!backdrop) return;

    const input = backdrop.querySelector(".cmd-input");
    const resultsContainer = backdrop.querySelector(".cmd-results");
    const triggerBtns = document.querySelectorAll(".cmd-trigger-btn");

    const openPalette = () => {
      backdrop.classList.add("active");
      input.value = "";
      this.filterCommandItems("");
      setTimeout(() => input.focus(), 50);
      document.body.style.overflow = "hidden";
    };

    const closePalette = () => {
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    };

    // Keyboard shortcut (Cmd+K / Ctrl+K)
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (backdrop.classList.contains("active")) {
          closePalette();
        } else {
          openPalette();
        }
      } else if (e.key === "Escape" && backdrop.classList.contains("active")) {
        closePalette();
      } else if (backdrop.classList.contains("active")) {
        this.handleCommandKeyboard(e, resultsContainer);
      }
    });

    triggerBtns.forEach(btn => btn.addEventListener("click", openPalette));

    // Backdrop click close
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closePalette();
    });

    // Quick Action Chips inside palette
    backdrop.querySelectorAll(".cmd-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const action = chip.getAttribute("data-action");
        if (action === "toggle-theme") {
          const next = this.currentTheme === "light" ? "obsidian" : "light";
          this.setTheme(next);
          closePalette();
        } else if (action === "terminal") {
          window.location.href = "client-terminal.html";
        } else if (action === "briefing") {
          window.location.href = "request-briefing.html";
        } else if (action === "simulator") {
          window.location.href = "simulator.html";
        }
      });
    });

    // Real-time search filter
    input.addEventListener("input", (e) => {
      this.filterCommandItems(e.target.value);
    });
  },

  filterCommandItems(query) {
    const backdrop = document.getElementById("cmd-palette");
    if (!backdrop) return;
    const resultsContainer = backdrop.querySelector(".cmd-results");
    const q = query.toLowerCase().trim();

    if (!q) {
      this.cmdFilteredItems = [...AureliusData.pages];
    } else {
      this.cmdFilteredItems = AureliusData.pages.filter(p => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.pillar.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.keywords.some(k => k.toLowerCase().includes(q))
        );
      });
    }

    this.cmdSelectedIndex = 0;
    this.renderCommandResults(resultsContainer);
  },

  renderCommandResults(container) {
    if (!container) return;

    if (this.cmdFilteredItems.length === 0) {
      container.innerHTML = `
        <div style="padding: 2.5rem 1.5rem; text-align: center; color: var(--text-muted); font-size: 13px;">
          No pages or guides matching your search.
        </div>
      `;
      return;
    }

    let html = `<div class="cmd-section-label">All Pages & Helpful Guides (${this.cmdFilteredItems.length})</div>`;

    this.cmdFilteredItems.forEach((item, idx) => {
      const isSelected = idx === this.cmdSelectedIndex ? "selected" : "";
      html += `
        <div class="cmd-item ${isSelected}" data-index="${idx}" data-url="${item.url}">
          <div class="cmd-item-left">
            <span class="cmd-item-num">${item.num}</span>
            <div>
              <span class="cmd-item-title">${item.title}</span>
              <span class="cmd-item-desc">— ${item.desc}</span>
            </div>
          </div>
          <span class="cmd-item-category">${item.pillar}</span>
        </div>
      `;
    });

    container.innerHTML = html;

    // Click handler on results
    container.querySelectorAll(".cmd-item").forEach(el => {
      el.addEventListener("click", () => {
        const url = el.getAttribute("data-url");
        if (url) window.location.href = url;
      });
    });
  },

  handleCommandKeyboard(e, container) {
    if (!this.cmdFilteredItems.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      this.cmdSelectedIndex = (this.cmdSelectedIndex + 1) % this.cmdFilteredItems.length;
      this.updateCommandSelection(container);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      this.cmdSelectedIndex = (this.cmdSelectedIndex - 1 + this.cmdFilteredItems.length) % this.cmdFilteredItems.length;
      this.updateCommandSelection(container);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = this.cmdFilteredItems[this.cmdSelectedIndex];
      if (target) window.location.href = target.url;
    }
  },

  updateCommandSelection(container) {
    const items = container.querySelectorAll(".cmd-item");
    items.forEach((item, idx) => {
      if (idx === this.cmdSelectedIndex) {
        item.classList.add("selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("selected");
      }
    });
  },

  /* ==========================================================================
     NAVIGATION & MOBILE DRAWER
     ========================================================================== */
  initNavigation() {
    // Current page active state
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link, .dropdown-link, .footer-nav-link").forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPath) {
        link.classList.add("active");
      }
    });

    // Mobile nav toggle
    const toggleBtn = document.querySelector(".mobile-nav-toggle");
    const drawer = document.querySelector(".mobile-drawer");
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener("click", () => {
        const isActive = drawer.classList.toggle("active");
        toggleBtn.setAttribute("aria-expanded", isActive ? "true" : "false");
        document.body.style.overflow = isActive ? "hidden" : "";
      });

      // Close on drawer link click
      drawer.querySelectorAll(".mobile-drawer-link").forEach(link => {
        link.addEventListener("click", () => {
          drawer.classList.remove("active");
          toggleBtn.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });

      // Close on Escape
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("active")) {
          drawer.classList.remove("active");
          toggleBtn.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });

      // Close if resized past tablet breakpoint
      window.addEventListener("resize", () => {
        if (window.innerWidth > 992 && drawer.classList.contains("active")) {
          drawer.classList.remove("active");
          toggleBtn.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    }
  },

  /* ==========================================================================
     TABS SYSTEM
     ========================================================================== */
  initTabs() {
    document.querySelectorAll(".tabs-container").forEach(tabContainer => {
      const btns = tabContainer.querySelectorAll(".tab-btn");
      const panes = tabContainer.querySelectorAll(".tab-pane");

      btns.forEach(btn => {
        btn.addEventListener("click", () => {
          const targetId = btn.getAttribute("data-tab");

          btns.forEach(b => b.classList.remove("active"));
          panes.forEach(p => p.classList.remove("active"));

          btn.classList.add("active");
          const targetPane = tabContainer.querySelector(`#${targetId}`);
          if (targetPane) targetPane.classList.add("active");
        });
      });
    });
  },

  /* ==========================================================================
     ACCORDIONS
     ========================================================================== */
  initAccordions() {
    document.querySelectorAll(".accordion-trigger").forEach(trigger => {
      trigger.addEventListener("click", () => {
        const parentItem = trigger.closest(".accordion-item");
        if (parentItem) {
          parentItem.classList.toggle("active");
        }
      });
    });
  },

  /* ==========================================================================
     GLOBAL INTERACTIVE WIDGETS (Simulation helpers)
     ========================================================================== */
  initGlobalInteractiveWidgets() {
    // 1. Rate Shock Simulation (Index page)
    const shockTriggerBtn = document.getElementById("simulate-rate-shock-btn");
    if (shockTriggerBtn) {
      shockTriggerBtn.addEventListener("click", () => {
        const steps = document.querySelectorAll(".shock-step-card");
        shockTriggerBtn.disabled = true;
        shockTriggerBtn.textContent = "EXECUTING MULTI-AGENT RESPONSE...";

        steps.forEach((s, idx) => {
          setTimeout(() => {
            steps.forEach(st => st.classList.remove("active"));
            s.classList.add("active");
            if (idx === steps.length - 1) {
              shockTriggerBtn.disabled = false;
              shockTriggerBtn.textContent = "SIMULATE CENTRAL BANK RATE SHOCK (RE-RUN)";
            }
          }, (idx + 1) * 350);
        });
      });
    }

    // 2. Audio Briefing Simulation (Advisory Suite)
    const audioPlayBtn = document.getElementById("briefing-play-btn");
    const audioCanvas = document.getElementById("briefing-wave-canvas");
    if (audioPlayBtn && audioCanvas) {
      this.initAudioVisualizer(audioCanvas, audioPlayBtn);
    }
  },

  initAudioVisualizer(canvas, playBtn) {
    const ctx = canvas.getContext("2d");
    let isPlaying = false;
    let animId = null;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.parentElement.clientHeight * window.devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const bars = 64;
      const barWidth = (w / bars) - 2;
      const isDark = document.documentElement.getAttribute("data-theme") !== "ivory";
      const accentColor = isDark ? "#D8B26E" : "#94712A";

      ctx.fillStyle = accentColor;

      for (let i = 0; i < bars; i++) {
        let heightVal;
        if (isPlaying) {
          heightVal = Math.sin((step * 0.08) + (i * 0.25)) * (h * 0.35) + Math.cos((step * 0.04) + i) * (h * 0.25) + (h * 0.2);
          heightVal = Math.max(4, Math.abs(heightVal));
        } else {
          heightVal = 4;
        }

        const x = i * (barWidth + 2);
        const y = (h - heightVal) / 2;
        ctx.fillRect(x, y, barWidth, heightVal);
      }

      if (isPlaying) step++;
      animId = requestAnimationFrame(render);
    };

    render();

    playBtn.addEventListener("click", () => {
      isPlaying = !isPlaying;
      playBtn.textContent = isPlaying ? "PAUSE BRIEFING AUDIO" : "PLAY 90-SECOND BRIEFING";

      // Sync simulated transcript lines
      const lines = document.querySelectorAll(".briefing-transcript-stream .transcript-line");
      if (isPlaying && lines.length) {
        let activeIdx = 0;
        const interval = setInterval(() => {
          if (!isPlaying) {
            clearInterval(interval);
            return;
          }
          lines.forEach(l => l.classList.remove("active"));
          if (lines[activeIdx]) {
            lines[activeIdx].classList.add("active");
            lines[activeIdx].scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
          activeIdx = (activeIdx + 1) % lines.length;
        }, 3000);
      }
    });
  }
};
