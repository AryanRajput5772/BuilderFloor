const pdImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let pdIndex = 0;

const pdMainImg = document.getElementById("pdMainImg");
const pdCurrent = document.getElementById("pdCurrent");
const pdTotal = document.getElementById("pdTotal");

pdTotal.innerText = pdImages.length;

function pdUpdate() {
  pdMainImg.src = pdImages[pdIndex];
  pdCurrent.innerText = pdIndex + 1;

  document.querySelectorAll(".pd-thumbnails img").forEach((img, i) => {
    img.classList.toggle("active", i === pdIndex);
  });
}

function pdNext() {
  pdIndex = (pdIndex + 1) % pdImages.length;
  pdUpdate();
}

function pdPrev() {
  pdIndex = (pdIndex - 1 + pdImages.length) % pdImages.length;
  pdUpdate();
}

function pdSet(i) {
  pdIndex = i;
  pdUpdate();
}

function toggleLike(btn) {
  const icon = btn.querySelector("i");

  btn.classList.toggle("active");

  // switch icon style
  if (btn.classList.contains("active")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
}

function printDetails() {
  window.print();
}

// Coordinates for Greater Kailash-1, Delhi
const lat = 28.5494;
const lng = 77.2425;

const map = L.map("pd-map").setView([lat, lng], 14);

// Tile Layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Marker
L.marker([lat, lng])
  .addTo(map)
  .bindPopup("Greater Kailash-1, South Delhi")
  .openPopup();

const loan = document.getElementById("loan");
const rate = document.getElementById("rate");
const tenure = document.getElementById("tenure");

const emiText = document.getElementById("emi");
const interestText = document.getElementById("interest");
const totalText = document.getElementById("total");

const loanVal = document.getElementById("loanVal");
const rateVal = document.getElementById("rateVal");
const tenureVal = document.getElementById("tenureVal");

/* FORMAT FOR EMI (AUTO LAKH / CR) */
function formatCurrency(num) {
  if (num >= 10000000) return "₹" + (num / 10000000).toFixed(2) + " Cr";
  if (num >= 100000) return "₹" + (num / 100000).toFixed(2) + " Lakh";
  return "₹" + num.toFixed(0);
}

/* FORCE CRORE FORMAT (FOR TOTAL + INTEREST) */
function formatCrore(num) {
  return "₹" + (num / 10000000).toFixed(2) + " Cr";
}

/* EMI CALCULATION */
function calculateEMI() {
  let P = parseFloat(loan.value); // Loan Amount
  let r = parseFloat(rate.value) / 12 / 100; // Monthly Interest
  let n = parseFloat(tenure.value) * 12; // Months

  let emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  let total = emi * n;
  let interest = total - P;

  /* UPDATE UI */
  emiText.innerText = formatCurrency(emi);
  interestText.innerText = formatCrore(interest);
  totalText.innerText = formatCrore(total);

  loanVal.innerText = formatCurrency(P);
  rateVal.innerText = rate.value + "%";
  tenureVal.innerText = tenure.value + " Years";
}

/* EVENTS */
loan.addEventListener("input", calculateEMI);
rate.addEventListener("input", calculateEMI);
tenure.addEventListener("input", calculateEMI);

/* INITIAL CALL */
calculateEMI();

// ------------------------------------------------------------------

function openMessageModal() {
  document.getElementById("pdMessageModal").classList.add("active");
  document.body.style.overflow = "hidden"; // lock
}

function openVisitModal() {
  document.getElementById("pdVisitModal").classList.add("active");
  document.body.style.overflow = "hidden"; // lock
}

function closeModal() {
  document.querySelectorAll(".pd-modal").forEach((modal) => {
    modal.classList.remove("active");
  });

  document.body.style.overflow = ""; // ✅ unlock
}
