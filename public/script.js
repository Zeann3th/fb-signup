// Date
document.addEventListener('DOMContentLoaded', function() {
  populateDatePicker();
  document.getElementById('month-select').addEventListener('change', updateDateOptions);
  document.getElementById('year-select').addEventListener('change', updateDateOptions);

  document.querySelectorAll("input[name='gender']").forEach((radio) => {
    radio.addEventListener('change', toggleCustomGender);
  })
});

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

function populateDatePicker() {
  const daySelect = document.getElementById('day-select');
  const monthSelect = document.getElementById('month-select');
  const yearSelect = document.getElementById('year-select');

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 13; i >= 1920; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }

  updateDateOptions();
}

function updateDateOptions() {
  const daySelect = document.getElementById('day-select');
  const monthSelect = document.getElementById('month-select');
  const yearSelect = document.getElementById('year-select');

  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);

  let dateLimit = 31;

  if (selectedMonth === 2) {
    if (checkLeapYear(selectedYear)) {
      dateLimit = 29;
    } else {
      dateLimit = 28;
    }
  } else if ([4, 6, 9, 11].includes(selectedMonth)) {
    dateLimit = 30;
  }

  const currentDate = parseInt(daySelect.value) || 1;

  daySelect.innerHTML = '';

  for (let i = 1; i <= dateLimit; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  if (currentDate <= dateLimit) {
    daySelect.value = currentDate;
  } else {
    daySelect.value = dateLimit;
  }
}

function toggleCustomGender() {
  const customGender = document.getElementById("gender-custom");
  const selectedGender = document.querySelector("input[name='gender']:checked");
  if (selectedGender && selectedGender.value === "X") {
    customGender.style.display = "block";
  } else {
    customGender.style.display = "none";
  }
}

// Modals
document.getElementById("help-btn1").addEventListener("click", () => {
  let modal1 = document.getElementById("modal1");
  modal1.style.display = modal1.style.display === "block" ? "none" : "block";
});

document.getElementById("help-btn2").addEventListener("click", () => {
  let modal2 = document.getElementById("modal2");
  modal2.style.display = modal2.style.display === "block" ? "none" : "block";
});
