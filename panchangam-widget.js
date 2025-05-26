
const panchangamData = {
  "2025-05-26": {
    "date": "26 மே 2025",
    "month": "வைகாசி",
    "nakshatram": "ரோகிணி",
    "yogam": "சித்த",
    "karanam": "கரவணை",
    "sunrise": "6:00 AM",
    "sunset": "6:30 PM",
    "vratham": "சனி விரதம்",
    "subhaNeram": "8:00 AM - 9:00 AM"
  },
  // Add more days here as needed
};

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function loadPanchangam() {
  const today = new Date();
  const key = formatDate(today);
  const data = panchangamData[key];

  if (data) {
    document.getElementById("panchangam-date").innerText = "நாள்: " + data.date;
    document.getElementById("panchangam-month").innerText = "தமிழ் மாதம்: " + data.month;
    document.getElementById("nakshatram").innerText = "நட்சத்திரம்: " + data.nakshatram;
    document.getElementById("yogam").innerText = "யோகம்: " + data.yogam;
    document.getElementById("karanam").innerText = "கரணம்: " + data.karanam;
    document.getElementById("sunrise").innerText = "சூரிய உதயம்: " + data.sunrise;
    document.getElementById("sunset").innerText = "சூரிய அஸ்தமனம்: " + data.sunset;
    document.getElementById("vratham").innerText = "விரதங்கள்: " + data.vratham;
    document.getElementById("subhaNeram").innerText = "சுப நேரம்: " + data.subhaNeram;
  } else {
    document.getElementById("panchangam").innerText = "இன்றைய பஞ்சாங்கம் கிடைக்கவில்லை.";
  }
}

window.addEventListener("DOMContentLoaded", loadPanchangam);
