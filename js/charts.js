/* ==========================================================================
   AURELIUS QUANTITATIVE SYSTEMS — CUSTOM CHART ENGINE (charts.js)
   Pure Canvas & SVG Data Visualizations (Zero External Dependencies)
   ========================================================================== */

class AureliusCharts {
  /**
   * Render an interactive Donut / Pie Allocation Chart on an HTML5 Canvas
   * @param {HTMLCanvasElement} canvas
   * @param {Array} data - [{ name: string, value: number, color: string, pct: number }]
   */
  static renderDonut(canvas, data, options = {}) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const isDark = document.documentElement.getAttribute("data-theme") !== "ivory";
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const outerRadius = Math.min(centerX, centerY) - 20;
    const innerRadius = outerRadius * 0.65;

    const total = data.reduce((sum, item) => sum + item.value, 0);
    let startAngle = -Math.PI / 2;

    ctx.clearRect(0, 0, rect.width, rect.height);

    data.forEach((slice) => {
      const sliceAngle = (slice.value / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();

      ctx.fillStyle = slice.color;
      ctx.fill();

      // Divider hairline
      ctx.strokeStyle = isDark ? "#0B0C10" : "#F7F7F5";
      ctx.lineWidth = 2;
      ctx.stroke();

      startAngle = endAngle;
    });

    // Center hole text
    ctx.fillStyle = isDark ? "#FFFFFF" : "#0E1015";
    ctx.font = "bold 15px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(options.centerLabel || "ALLOCATION", centerX, centerY - 8);

    ctx.fillStyle = isDark ? "#D0D4DE" : "#5C6170";
    ctx.font = "11px 'JetBrains Mono', monospace";
    ctx.fillText("100% CUSTODY", centerX, centerY + 12);
  }

  /**
   * Render Monte Carlo Percentile Fan Chart (10th, 50th, 90th percentiles + paths)
   * @param {HTMLCanvasElement} canvas
   * @param {Object} simulationResult - { years: number[], p10: number[], p50: number[], p90: number[], samplePaths: number[][] }
   */
  static renderMonteCarlo(canvas, sim) {
    if (!canvas || !sim) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const isDark = document.documentElement.getAttribute("data-theme") !== "ivory";
    const w = rect.width;
    const h = rect.height;

    const padL = 70;
    const padR = 25;
    const padT = 30;
    const padB = 40;
    const chartW = w - padL - padR;
    const chartH = h - padT - padB;

    ctx.clearRect(0, 0, w, h);

    const years = sim.years;
    const maxVal = Math.max(...sim.p90) * 1.1;
    const minVal = Math.min(0, Math.min(...sim.p10) * 0.9);

    const getX = (yrIdx) => padL + (yrIdx / (years.length - 1)) * chartW;
    const getY = (val) => padT + chartH - ((val - minVal) / (maxVal - minVal)) * chartH;

    // Grid Lines & Labels
    const gridColor = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(14, 16, 21, 0.12)";
    const textColor = isDark ? "#D0D4DE" : "#30343F";
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.fillStyle = textColor;
    ctx.font = "10.5px 'JetBrains Mono', monospace";

    // Y-Axis Ticks (5 steps)
    for (let i = 0; i <= 5; i++) {
      const val = minVal + (i / 5) * (maxVal - minVal);
      const y = getY(val);
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(w - padR, y);
      ctx.stroke();

      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      const formatted = val >= 1e9 
        ? `$${(val / 1e9).toFixed(1)}B` 
        : val >= 1e6 
        ? `$${(val / 1e6).toFixed(1)}M` 
        : val >= 1e3 
        ? `$${(val / 1e3).toFixed(0)}k` 
        : `$${Math.round(val)}`;
      ctx.fillText(formatted, padL - 8, y);
    }

    // X-Axis Ticks (Years)
    const stepX = Math.ceil(years.length / 6);
    years.forEach((yr, idx) => {
      if (idx % stepX === 0 || idx === years.length - 1) {
        const x = getX(idx);
        ctx.beginPath();
        ctx.moveTo(x, padT);
        ctx.lineTo(x, padT + chartH);
        ctx.stroke();

        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(`Year ${yr}`, x, h - padB + 8);
      }
    });

    // 1. Draw Sample Individual Simulation Paths (light background traces)
    const pathColor = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(14, 16, 21, 0.06)";
    ctx.strokeStyle = pathColor;
    ctx.lineWidth = 1;
    if (sim.samplePaths) {
      sim.samplePaths.slice(0, 40).forEach(path => {
        ctx.beginPath();
        path.forEach((val, idx) => {
          const x = getX(idx);
          const y = getY(val);
          if (idx === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();
      });
    }

    // 2. Shaded Percentile Fan Envelope (between 10th and 90th percentile)
    const fanGradient = ctx.createLinearGradient(0, padT, 0, padT + chartH);
    if (isDark) {
      fanGradient.addColorStop(0, "rgba(216, 178, 110, 0.24)");
      fanGradient.addColorStop(1, "rgba(216, 178, 110, 0.03)");
    } else {
      fanGradient.addColorStop(0, "rgba(148, 113, 42, 0.24)");
      fanGradient.addColorStop(1, "rgba(148, 113, 42, 0.03)");
    }

    ctx.beginPath();
    // 90th percentile forward
    sim.p90.forEach((val, idx) => {
      const x = getX(idx);
      const y = getY(val);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    // 10th percentile backward
    for (let idx = sim.p10.length - 1; idx >= 0; idx--) {
      const x = getX(idx);
      const y = getY(sim.p10[idx]);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = fanGradient;
    ctx.fill();

    // 3. Draw 90th Percentile Curve (Bull Case)
    ctx.beginPath();
    ctx.strokeStyle = isDark ? "rgba(232, 200, 138, 0.85)" : "rgba(184, 142, 62, 0.85)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    sim.p90.forEach((val, idx) => {
      const x = getX(idx);
      const y = getY(val);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // 4. Draw 10th Percentile Curve (Stress Case)
    ctx.beginPath();
    ctx.strokeStyle = "#EF4444";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    sim.p10.forEach((val, idx) => {
      const x = getX(idx);
      const y = getY(val);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // 5. Draw 50th Percentile Curve (Median Expected Path)
    ctx.beginPath();
    ctx.strokeStyle = isDark ? "#D8B26E" : "#94712A";
    ctx.lineWidth = 2.5;
    sim.p50.forEach((val, idx) => {
      const x = getX(idx);
      const y = getY(val);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Legend on Top Right of Canvas
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.font = "10.5px 'JetBrains Mono', monospace";

    ctx.fillStyle = isDark ? "#D8B26E" : "#94712A";
    ctx.fillText("— 50th Percentile (Expected Median)", w - padR, padT + 4);

    ctx.fillStyle = isDark ? "#E8C88A" : "#7A5B1D";
    ctx.fillText("-- 90th Percentile (Bull Scenario)", w - padR, padT + 20);

    ctx.fillStyle = "#EF4444";
    ctx.fillText("-- 10th Percentile (Severe Stress)", w - padR, padT + 36);
  }

  /**
   * Render a simple sparkline on an inline canvas
   */
  static renderSparkline(canvas, points, color = "#2E8B57") {
    if (!canvas || !points.length) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const min = Math.min(...points);
    const max = Math.max(...points);
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;

    points.forEach((val, idx) => {
      const x = (idx / (points.length - 1)) * w;
      const y = h - ((val - min) / (max - min || 1)) * (h - 4) - 2;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
}

// Global hook
window.AureliusCharts = AureliusCharts;
