/* ==========================================================================
   AURELIUS QUANTITATIVE SYSTEMS — LIVE CLIENT TERMINAL ENGINE (terminal.js)
   Multi-Agent Live Console, Currency Switcher, Holdings & Fiduciary Approvals
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  AureliusTerminal.init();
});

const AureliusTerminal = {
  currentCurrency: "USD",
  baseTotalUSD: AureliusData.portfolio.baseTotalUSD,
  ytdReturnUSD: AureliusData.portfolio.ytdReturnUSD,
  isConsoleStreaming: false,

  init() {
    this.initCurrencySwitcher();
    this.renderConsolidatedBanner();
    this.renderAllocationChart();
    this.renderHoldingsTable();
    this.initPromptConsole();
    this.initFiduciaryApprovals();
  },

  /* ==========================================================================
     CURRENCY SWITCHER (USD, CHF, EUR, GBP, SGD, XAU)
     ========================================================================== */
  initCurrencySwitcher() {
    this.currentCurrency = AureliusUtils.getCurrency();

    const selector = document.getElementById("terminal-currency-select");
    if (selector) {
      selector.value = this.currentCurrency;
      selector.addEventListener("change", (e) => {
        this.setCurrency(e.target.value);
      });
    }

    // Listen to global currency change events
    window.addEventListener("aurelius:currency-changed", (e) => {
      this.currentCurrency = e.detail.currency;
      if (selector) selector.value = this.currentCurrency;
      this.updateAllCurrencyDisplays();
    });

    // Listen to global theme change
    window.addEventListener("aurelius:theme-changed", () => {
      this.renderAllocationChart();
    });

    // Listen to window resize
    window.addEventListener("resize", () => {
      this.renderAllocationChart();
    });
  },

  setCurrency(currCode) {
    if (!AureliusData.currencies[currCode]) return;
    this.currentCurrency = currCode;
    localStorage.setItem("aurelius_currency", currCode);

    // Update global core state
    if (window.AureliusCore) {
      AureliusCore.setCurrency(currCode);
    }

    this.updateAllCurrencyDisplays();
  },

  updateAllCurrencyDisplays() {
    this.renderConsolidatedBanner();
    this.renderHoldingsTable();
    this.renderAllocationChart();
    this.renderPendingAmounts();
  },

  /* ==========================================================================
     CONSOLIDATED NET WORTH BANNER
     ========================================================================== */
  renderConsolidatedBanner() {
    const netWorthEl = document.getElementById("terminal-net-worth");
    const ytdDeltaEl = document.getElementById("terminal-ytd-delta");
    const varEl = document.getElementById("terminal-var99");

    if (netWorthEl) {
      netWorthEl.textContent = AureliusUtils.formatCurrency(this.baseTotalUSD, this.currentCurrency);
    }

    if (ytdDeltaEl) {
      const formattedDelta = AureliusUtils.formatCurrency(this.ytdReturnUSD, this.currentCurrency);
      ytdDeltaEl.textContent = `+${AureliusData.portfolio.ytdReturnPct}% YTD (${formattedDelta})`;
    }

    if (varEl) {
      varEl.textContent = AureliusUtils.formatCurrency(AureliusData.portfolio.var99DailyUSD, this.currentCurrency);
    }
  },

  /* ==========================================================================
     ALLOCATION DONUT CHART
     ========================================================================== */
  renderAllocationChart() {
    const canvas = document.getElementById("terminal-donut-canvas");
    if (!canvas) return;

    const colors = ["#D8B26E", "#A0A6B5", "#E8C88A", "#686D7C", "#10B981", "#F59E0B"];
    const chartData = AureliusData.portfolio.allocations.map((a, idx) => ({
      name: a.name,
      value: a.valueUSD,
      color: colors[idx % colors.length],
      pct: a.pct
    }));

    AureliusCharts.renderDonut(canvas, chartData, { centerLabel: "TOTAL NAV" });

    // Render legend
    const legendEl = document.getElementById("terminal-donut-legend");
    if (legendEl) {
      let html = "";
      chartData.forEach(item => {
        const valStr = AureliusUtils.formatCompactCurrency(item.value, this.currentCurrency);
        html += `
          <div class="terminal-legend-row" style="display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px solid var(--border-hairline); font-size: 12px; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
              <span style="width: 8px; height: 8px; background: ${item.color}; display: inline-block; flex-shrink: 0;"></span>
              <span style="color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</span>
            </div>
            <div class="mono" style="color: var(--text-primary); font-weight: 500; white-space: nowrap; flex-shrink: 0;">
              ${item.pct}% <span style="color: var(--text-muted); font-size: 11px;">(${valStr})</span>
            </div>
          </div>
        `;
      });
      legendEl.innerHTML = html;
    }
  },

  /* ==========================================================================
     HOLDINGS & CUSTODIAN BREAKDOWN TABLE
     ========================================================================== */
  renderHoldingsTable() {
    const tbody = document.getElementById("terminal-holdings-tbody");
    if (!tbody) return;

    let html = "";
    AureliusData.portfolio.custodians.forEach(cust => {
      const balanceFormatted = AureliusUtils.formatCurrency(cust.balanceUSD, this.currentCurrency);
      html += `
        <tr>
          <td>
            <strong>${cust.name}</strong>
            <div style="font-size: 11px; color: var(--text-muted);">${cust.type}</div>
          </td>
          <td><span class="mono">${cust.city}</span></td>
          <td class="num-col mono cell-highlight">${balanceFormatted}</td>
          <td><span class="badge badge-emerald">${cust.status}</span></td>
        </tr>
      `;
    });

    tbody.innerHTML = html;
  },

  renderPendingAmounts() {
    // Updates any dynamic pending action badges if needed
  },

  /* ==========================================================================
     AI ADVISOR MULTI-AGENT PROMPT CONSOLE
     ========================================================================== */
  initPromptConsole() {
    const consoleOutput = document.getElementById("terminal-console-output");
    const consoleInput = document.getElementById("terminal-console-input");
    const submitBtn = document.getElementById("terminal-console-submit");
    const presetPills = document.querySelectorAll(".preset-prompt-pill");

    if (!consoleOutput) return;

    presetPills.forEach(pill => {
      pill.addEventListener("click", () => {
        const promptId = pill.getAttribute("data-prompt-id");
        const preset = AureliusData.terminalPrompts.find(p => p.id === promptId);
        if (preset) {
          if (consoleInput) consoleInput.value = preset.promptText;
          this.executePrompt(preset);
        }
      });
    });

    if (submitBtn && consoleInput) {
      submitBtn.addEventListener("click", () => {
        const text = consoleInput.value.trim();
        if (!text) return;
        this.executeCustomPrompt(text);
      });

      consoleInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const text = consoleInput.value.trim();
          if (!text) return;
          this.executeCustomPrompt(text);
        }
      });
    }
  },

  executePrompt(preset) {
    if (this.isConsoleStreaming) return;
    this.isConsoleStreaming = true;

    const consoleOutput = document.getElementById("terminal-console-output");
    consoleOutput.innerHTML = `
      <div style="padding-bottom: 8px; border-bottom: 1px solid var(--border-hairline); margin-bottom: 12px;">
        <span class="mono" style="color: var(--accent-primary);">> PRINCIPAL QUERY:</span>
        <div style="font-size: 13.5px; color: var(--text-primary); margin-top: 2px;">${preset.promptText}</div>
      </div>
      <div id="streaming-agent-responses">
        <div class="mono" style="color: var(--text-muted); font-size: 11px;">CONVENING ADVERSARIAL AGENT COUNCIL...</div>
      </div>
    `;

    const responsesContainer = document.getElementById("streaming-agent-responses");
    let step = 0;

    const streamInterval = setInterval(() => {
      if (step < preset.responses.length) {
        const resp = preset.responses[step];
        const agentCard = document.createElement("div");
        agentCard.style.padding = "8px 0";
        agentCard.style.borderBottom = "1px solid rgba(244, 244, 240, 0.05)";
        agentCard.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
            <span class="badge badge-accent">${resp.agent}</span>
            <span class="mono" style="font-size: 10px; color: var(--signal-positive);">${resp.latency}</span>
          </div>
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">${resp.text}</div>
        `;
        responsesContainer.appendChild(agentCard);
        responsesContainer.scrollTop = responsesContainer.scrollHeight;
        step++;
      } else {
        clearInterval(streamInterval);
        this.isConsoleStreaming = false;

        // Render Action Button
        const actionBox = document.createElement("div");
        actionBox.style.marginTop = "14px";
        actionBox.style.display = "flex";
        actionBox.style.justifyContent = "space-between";
        actionBox.style.alignItems = "center";
        actionBox.innerHTML = `
          <span class="badge badge-emerald">&#10003; 5-AGENT CONSENSUS RATIFIED (38.4MS)</span>
          <button id="terminal-action-btn" class="btn btn-primary btn-sm btn-mono" type="button">
            ${preset.action} &rarr;
          </button>
        `;
        responsesContainer.appendChild(actionBox);

        const actionBtn = document.getElementById("terminal-action-btn");
        if (actionBtn) {
          actionBtn.addEventListener("click", () => {
            actionBtn.textContent = "EXECUTED ON CUSTODIAN DESK \u2713";
            actionBtn.disabled = true;
          });
        }
      }
    }, 320);
  },

  executeCustomPrompt(text) {
    const mockPreset = {
      promptText: text,
      responses: [
        { agent: "The Macro Strategist", latency: "11ms", text: `Analyzing macro world model parameters for: "${text}". Regime stability index: 94.2%.` },
        { agent: "The Risk Hawk", latency: "19ms", text: "Underwriting maximum permissible 30-day liquidity drawdown. No constitutional boundary breach identified." },
        { agent: "The Tax Counsel", latency: "27ms", text: "Cross-border treaty analysis complete across Zurich, Singapore, and Luxembourg SPV nodes." },
        { agent: "The Fiduciary Arbiter", latency: "36ms", text: "RECOMMENDATION: Consensus approved. Zero commission conflicts detected." }
      ],
      action: "Execute Instruction via Zurich FIX HSM"
    };
    this.executePrompt(mockPreset);
  },

  /* ==========================================================================
     PENDING FIDUCIARY APPROVALS QUEUE (Biometric Key Confirmation)
     ========================================================================== */
  initFiduciaryApprovals() {
    const listContainer = document.getElementById("terminal-approvals-list");
    if (!listContainer) return;

    let html = "";
    AureliusData.portfolio.pendingApprovals.forEach(act => {
      html += `
        <div class="card" id="approval-card-${act.id}" style="background-color: var(--bg-tertiary); margin-bottom: var(--space-4);">
          <div class="approval-card-header">
            <div>
              <span class="mono" style="font-size: 11px; color: var(--accent-primary);">${act.id} // ${act.jurisdiction}</span>
              <h4 style="font-size: 1.15rem; margin-top: 2px; margin-bottom: 4px;">${act.title}</h4>
            </div>
            <span class="badge ${act.urgency === 'HIGH' ? 'badge-crimson' : 'badge-accent'}">${act.urgency}</span>
          </div>

          <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5; margin-bottom: var(--space-3);">${act.description}</p>

          <div class="approval-footer">
            <span class="mono" style="font-size: 11px; color: var(--signal-positive);">ALPHA: ${act.taxAlphaGenerated || act.interestSavings || act.costBasis}</span>
            <button class="btn btn-outline btn-sm btn-mono approval-btn" data-act-id="${act.id}" type="button">
              APPROVE WITH BIOMETRIC KEY &rarr;
            </button>
          </div>
        </div>
      `;
    });

    listContainer.innerHTML = html;

    listContainer.querySelectorAll(".approval-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-act-id");
        btn.textContent = "VERIFYING YUBIKEY...";
        btn.disabled = true;

        setTimeout(() => {
          btn.textContent = "RATIFIED // HSM SIGNED \u2713";
          btn.className = "btn btn-primary btn-sm btn-mono";
          const card = document.getElementById(`approval-card-${id}`);
          if (card) {
            card.style.borderColor = "var(--signal-positive)";
          }
        }, 600);
      });
    });
  }
};

window.AureliusTerminal = AureliusTerminal;
