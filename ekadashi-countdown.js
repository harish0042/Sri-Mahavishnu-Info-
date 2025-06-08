(function () {
  const ekaDates = [
    { date: "2025-06-21", info: "சனி, ஆனி மாதம் 7 – தேய்பிறை ஏகாதசி" },
    { date: "2025-07-06", info: "ஞாயிறு, ஆனி மாதம் 22 – வளர்பிறை ஏகாதசி" },
    { date: "2025-07-20", info: "ஞாயிறு, ஆடி மாதம் 4 – தேய்பிறை ஏகாதசி" },
    { date: "2025-08-04", info: "திங்கள், ஆடி மாதம் 19 – வளர்பிறை ஏகாதசி" },
    { date: "2025-08-19", info: "செவ்வாய், ஆவணி மாதம் 19 – தேய்பிறை ஏகாதசி" },
    { date: "2025-09-03", info: "புதன், ஆவணி மாதம் 18 – வளர்பிறை ஏகாதசி" },
    { date: "2025-10-03", info: "வெள்ளி, புரட்டாசி மாதம் 17 – வளர்பிறை ஏகாதசி" },
    { date: "2025-10-17", info: "வெள்ளி, புரட்டாசி மாதம் 31 – தேய்பிறை ஏகாதசி" },
    { date: "2025-11-01", info: "சனி, ஐப்பசி மாதம் 15 – வளர்பிறை ஏகாதசி" },
    { date: "2025-11-15", info: "சனி, ஐப்பசி மாதம் 29 – தேய்பிறை ஏகாதசி" },
    { date: "2025-12-15", info: "திங்கள், கார்த்திகை மாதம் 29 – தேய்பிறை ஏகாதசி" },
    { date: "2025-12-30", info: "செவ்வாய், மார்கழி மாதம் 15 – வளர்பிறை ஏகாதசி" }
  ];

  function findNextEkadashi() {
    const now = new Date();
    for (let i = 0; i < ekaDates.length; i++) {
      const d = new Date(ekaDates[i].date + "T00:00:00");
      if (d >= now) return { date: d, info: ekaDates[i].info };
    }
    return null;
  }

  function renderWidget() {
    const eka = findNextEkadashi();
    if (!eka) return;

    const today = new Date();
    const diff = Math.ceil((eka.date - today) / (1000 * 60 * 60 * 24));

    const container = document.getElementById("eka-widget");
    container.innerHTML = `
      <div style="background:#fff8e1;border-left:5px solid #f57c00;padding:16px;border-radius:10px;max-width:360px;margin:auto;text-align:center;font-family:'Noto Sans Tamil',sans-serif;">
        <h3 style="color:#bf360c;">🙏 அடுத்த ஏகாதசி நினைவூட்டல்</h3>
        <div style="color:#4e342e;font-size:16px;font-weight:bold;">${eka.info}</div>
        <div style="font-size:28px;font-weight:bold;color:#d84315;margin:10px 0;">
          ${diff === 0 ? "இன்று ஏகாதசி!" : diff === 1 ? "நாளை ஏகாதசி!" : `${diff} நாட்களில்!`}
        </div>
        <div style="font-size:13px;color:#6d4c41;">தேதி: ${eka.date.toLocaleDateString('ta-IN')}</div>
      </div>`;
  }

  renderWidget();
})();
