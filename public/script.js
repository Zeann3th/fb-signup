// Global
let monthSelect = document.getElementById("month-select");
let daySelect = document.getElementById("day-select");
let yearSelect = document.getElementById("year-select");

// Day options
const validMonthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"];

// Initial
daySelect.innerHTML = `<option value=''>${new Date().getDate()}</option>`;
let month = new Date().getMonth();
monthSelect.innerHTML = `<option value=month>${monthNames[month]}</option>`;
yearSelect.innerHTML = `<option value=''>${new Date().getFullYear()}</option>`;

// Dynamic
monthSelect.addEventListener("change", (e) => {
  let selectedMonth = e.target.value;
  for (let i = 1; i <= validMonthDay[selectedMonth - 1]; i++) {
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    daySelect.appendChild(option);
  }
});

// Month options
for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.text = monthNames[i - 1];
  option.value = i;
  monthSelect.appendChild(option);
}

// Year options
for (let i = 1970; i <= new Date().getFullYear(); i++) {
  let option = document.createElement("option");
  option.text = i;
  option.value = i;
  yearSelect.appendChild(option);
}

let helpBtn1 = document.getElementById("help-btn1");
helpBtn1.addEventListener("click", () => {
  let modal1 = document.getElementById("modal1")
  modal1.style.display = (modal1.style.display === "block") ? "none" : "block";
})

let helpBtn2 = document.getElementById("help-btn2");
helpBtn2.addEventListener("click", () => {
  let modal2 = document.getElementById("modal2");
  modal2.style.display = (modal2.style.display === "block") ? "none" : "block";
})
