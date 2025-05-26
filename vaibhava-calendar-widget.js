
const vaibhavaDays = {
  "2025-05-02": "ஸ்ரீ ராமானுஜ ஜயந்தி",
  "2025-05-10": "நரசிம்ஹ ஜயந்தி",
  "2025-05-23": "ஸ்ரீ கிருஷ்ண பக்க வழிபாடு",
  "2025-05-26": "ஸ்ரீ ருத்ர அபிஷேகம்"
};

function generateCalendar(year, month) {
  const container = document.getElementById("vaibhava-calendar");
  container.innerHTML = "";

  const date = new Date(year, month, 1);
  const monthName = date.toLocaleString("ta-IN", { month: "long" });
  const table = document.createElement("table");
  table.classList.add("vaibhava-table");

  const header = document.createElement("caption");
  header.innerText = `${monthName} ${year} வைபவ தினங்கள்`;
  table.appendChild(header);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let d = 1; d <= daysInMonth; d++) {
    const fullDate = `${year}-${(month+1).toString().padStart(2, "0")}-${d.toString().padStart(2, "0")}`;
    if (vaibhavaDays[fullDate]) {
      const row = document.createElement("tr");
      const dateCell = document.createElement("td");
      const nameCell = document.createElement("td");
      dateCell.innerText = d;
      nameCell.innerText = vaibhavaDays[fullDate];
      row.appendChild(dateCell);
      row.appendChild(nameCell);
      table.appendChild(row);
    }
  }

  if (table.rows.length === 1) {
    const row = document.createElement("tr");
    const noEventCell = document.createElement("td");
    noEventCell.colSpan = 2;
    noEventCell.innerText = "இந்த மாதத்தில் வைபவ தினங்கள் இல்லை.";
    row.appendChild(noEventCell);
    table.appendChild(row);
  }

  container.appendChild(table);
}

window.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  generateCalendar(today.getFullYear(), today.getMonth());
});
