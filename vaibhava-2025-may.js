
(function () {
  const vaibhavaDays = {'2025-05-01': 'ஸ்ரீ ஆதிசங்கரர் ஜெயந்தி', '2025-05-03': 'ஸ்ரீ ராமானுஜர் திருநட்சத்திரம்', '2025-05-05': 'ஸ்ரீ நரசிம்ஹ ஜெயந்தி', '2025-05-10': 'ஸ்ரீ குருவாயூரப்பன் பஞ்ச இராகங்கள்', '2025-05-14': 'ஸ்ரீ வைகாசி விசாகம்', '2025-05-17': 'ஸ்ரீ சத்திய நாராயண பூஜை', '2025-05-18': 'ஸ்ரீ மத்வாசார்யர் தினம்', '2025-05-21': 'ஸ்ரீ ஹனுமத் ஜெயந்தி', '2025-05-23': 'ஸ்ரீ ராமானுஜ பஞ்ச சமஸ்கார நாள்', '2025-05-26': 'ஸ்ரீ சுதர்சன ஹோமம்', '2025-05-30': 'ஸ்ரீ வைகுண்ட ஏகாதசி'};
  const today = new Date().toISOString().split("T")[0];
  const todayEvent = vaibhavaDays[today];

  const box = document.getElementById("vaibhava-dinam-box");
  const el = document.getElementById("vaibhava-dinam");

  if (el) {
    el.textContent = todayEvent || "இன்றைக்கு வைபவ தினம் இல்லை";
  } else if (box) {
    box.innerHTML = `<p>இன்றைக்கு வைபவ தினம் இல்லை</p>`;
  }
})();
