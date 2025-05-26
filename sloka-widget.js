
const slokas = [
  { sloka: "ॐ नमो नारायणाय", meaning: "நாராயணனுக்கு வணக்கம்" },
  { sloka: "ॐ मधवाय नमः", meaning: "மாதவனுக்கு வணக்கம்" },
  { sloka: "ॐ विष्णवे नमः", meaning: "விஷ்ணுவுக்கு வணக்கம்" },
  { sloka: "ॐ श्रीधराय नमः", meaning: "ஸ்ரீதரனுக்கு வணக்கம்" },
  { sloka: "ॐ हृषीकेशाय नमः", meaning: "ஹ்ருஷீகேசனுக்கு வணக்கம்" },
  { sloka: "ॐ पद्मनाभाय नमः", meaning: "பத்மநாபனுக்கு வணக்கம்" },
  { sloka: "ॐ दामोदराय नमः", meaning: "தாமோதரனுக்கு வணக்கம்" },
  { sloka: "ॐ वासुदेवाय नमः", meaning: "வாசுதேவனுக்கு வணக்கம்" },
  { sloka: "ॐ संकर्षणाय नमः", meaning: "சங்கர்ஷணனுக்கு வணக்கம்" },
  { sloka: "ॐ प्रधुम्नाय नमः", meaning: "பிரத்யும்னனுக்கு வணக்கம்" },
  { sloka: "ॐ अनिरुद्धाय नमः", meaning: "அநிருத்தனுக்கு வணக்கம்" },
  { sloka: "ॐ पुरुषोत्तमाय नमः", meaning: "புருஷோத்தமனுக்கு வணக்கம்" },
  { sloka: "ॐ अच्युताय नमः", meaning: "அச்சுதனுக்கு வணக்கம்" },
  { sloka: "ॐ केशवाय नमः", meaning: "கேசவனுக்கு வணக்கம்" },
  { sloka: "ॐ नारसिंहाय नमः", meaning: "நரசிம்மனுக்கு வணக்கம்" },
  { sloka: "ॐ जनार्दनाय नमः", meaning: "ஜனார்த்தனனுக்கு வணக்கம்" },
  { sloka: "ॐ उपेन्द्राय नमः", meaning: "உபெந்த்ரனுக்கு வணக்கம்" },
  { sloka: "ॐ हरये नमः", meaning: "ஹரிக்கு வணக்கம்" },
  { sloka: "ॐ गोविन्दाय नमः", meaning: "கோவிந்தனுக்கு வணக்கம்" },
  { sloka: "ॐ विष्णवे नमः", meaning: "விஷ்ணுவுக்கு வணக்கம்" },
  { sloka: "ॐ त्रिविक्रमाय नमः", meaning: "த்ரிவிக்ரமனுக்கு வணக்கம்" },
  { sloka: "ॐ वामनाय नमः", meaning: "வாமனனுக்கு வணக்கம்" },
  { sloka: "ॐ श्रीनिवासाय नमः", meaning: "ஸ்ரீனிவாசனுக்கு வணக்கம்" },
  { sloka: "ॐ लक्ष्मीपतये नमः", meaning: "லக்ஷ்மீபதிக்கு வணக்கம்" },
  { sloka: "ॐ गरुडवाहनाय नमः", meaning: "கருடவாகனனுக்கு வணக்கம்" },
  { sloka: "ॐ शेषशयिने नमः", meaning: "சேஷசயனனுக்கு வணக்கம்" },
  { sloka: "ॐ योगनिद्राय नमः", meaning: "யோகநித்ரைக்கு வணக்கம்" },
  { sloka: "ॐ सत्यनारायणाय नमः", meaning: "ஸத்யநாராயணனுக்கு வணக்கம்" },
  { sloka: "ॐ परमात्मने नमः", meaning: "பரமாத்மாவுக்கு வணக்கம்" },
  { sloka: "ॐ वेङ्कटेशाय नमः", meaning: "வெங்கடேசனுக்கு வணக்கம்" }
];

function loadSloka() {
  const today = new Date();
  const index = today.getDate() % slokas.length;
  const sloka = slokas[index];
  document.getElementById("sloka").innerText = sloka.sloka;
  document.getElementById("meaning").innerText = sloka.meaning;
}

window.addEventListener("DOMContentLoaded", loadSloka);
