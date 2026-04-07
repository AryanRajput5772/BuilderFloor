const sendOtpBtn = document.getElementById("sendOtp");
const sendOtpBtn1 = document.getElementById("sendOtp1");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const changeNumLink = document.getElementById("Change-num");
const changeNumLink1 = document.getElementById("Change-num1");
const emailBtn = document.getElementById("Email");
const mobileBtn = document.getElementById("Mobile");
const otpForm = document.getElementById("otpForm");
const emailForm = document.getElementById("emailForm");
const emailBtn2 = document.getElementById("Email1");
const mobileBtn2 = document.getElementById("Mobile1");
const otpForm1 = document.getElementById("otpForm1");
const emailForm1 = document.getElementById("emailForm1");

emailBtn2.addEventListener("click", function () {
  step3.classList.remove("hidden");
  step4.classList.add("hidden");
  emailBtn2.classList.add("active");
  mobileBtn2.classList.remove("active");
  emailForm1.style.display = "block";
  otpForm1.style.display = "none";
});
mobileBtn2.addEventListener("click", function () {
  step3.classList.remove("hidden");
  step4.classList.add("hidden");
  mobileBtn2.classList.add("active");
  emailBtn2.classList.remove("active");
  emailForm1.style.display = "none";
  otpForm1.style.display = "block";
  sendOtpBtn1.style.display = "block"; // show send OTP button when mobile tab is clicked
});

emailBtn.addEventListener("click", function () {
  step1.classList.remove("hidden");
  step2.classList.add("hidden");
  emailBtn.classList.add("active");
  mobileBtn.classList.remove("active");
  emailForm.style.display = "block";
  otpForm.style.display = "none";
});

mobileBtn.addEventListener("click", function () {
  step1.classList.remove("hidden");
  step2.classList.add("hidden");
  mobileBtn.classList.add("active");
  emailBtn.classList.remove("active");
  emailForm.style.display = "none";
  otpForm.style.display = "block";
  sendOtpBtn.style.display = "block"; // show send OTP button when mobile tab is clicked
});

// sendOtpBtn.addEventListener("click", function () {
//   step2.classList.remove("hidden"); // show OTP
//   sendOtpBtn.style.display = "none"; // hide send OTP button
// });
const mobileInput = document.querySelector("#step1 input");
const mobileInput1 = document.getElementById("mobileInput1");
const nameInput = document.getElementById("nameInput");
const nameInputLabel = document.getElementById("nameInputlabel");

sendOtpBtn.addEventListener("click", function () {
  // ❌ Check empty
  if (
    mobileInput.value.trim() === "" ||
    mobileInput.value.trim().length < 10 ||
    mobileInput.value.trim().length > 10
  ) {
    mobileInput.focus();
    return;
  }

  // ✅ If valid → show OTP section
  step2.classList.remove("hidden");
  sendOtpBtn.style.display = "none";
  mobileInput.readOnly = true; // disable mobile input after sending OTP
});
sendOtpBtn1.addEventListener("click", function () {
  // ❌ Check empty
  if (
    nameInput.value.trim() === "" ||
    !/^[a-zA-Z\s]{3,}$/.test(nameInput.value.trim())
  ) {
    nameInput.focus();
    return;
  }
  if (
    mobileInput1.value.trim() === "" ||
    mobileInput1.value.trim().length < 10 ||
    mobileInput1.value.trim().length > 10
  ) {
    mobileInput1.focus();
    return;
  }

  // ✅ If valid → show OTP section
  step4.classList.remove("hidden");
  sendOtpBtn1.style.display = "none";
  mobileInput1.readOnly = true; // disable mobile input after sending OTP
  nameInput.style.display = "none"; // hide name input after sending OTP
  nameInputLabel.style.display = "none"; // hide name input after sending OTP
});

changeNumLink.addEventListener("click", function (e) {
  e.preventDefault();
  step2.classList.add("hidden"); // hide OTP
  sendOtpBtn.style.display = "block"; // show send OTP button
  step1.classList.remove("hidden"); // show mobile number input
  mobileInput.readOnly = false;
});

changeNumLink1.addEventListener("click", function (e) {
  e.preventDefault();
  step4.classList.add("hidden"); // hide OTP
  sendOtpBtn1.style.display = "block"; // show send OTP button
  step3.classList.remove("hidden"); // show mobile number input
  mobileInput1.readOnly = false;
  nameInput.style.display = "block"; // show name input when changing number
  nameInputLabel.style.display = "block"; // show name input label when changing number
});

var login = document.getElementById("login");
var register = document.getElementById("register");
var loginModal = document.getElementById("loginModal");
var closeBtn = document.querySelector(".close-btn");
var closeBtn2 = document.querySelector(".close-btn2");
var registerModal = document.getElementById("registerModal");
var pSignup = document.getElementById("p-signup");
var pLogin = document.getElementById("p-login");

pLogin.addEventListener("click", function (e) {
  e.preventDefault();
  registerModal.style.display = "none";
  loginModal.style.display = "flex";
});

pSignup.addEventListener("click", function (e) {
  e.preventDefault();
  loginModal.style.display = "none";
  registerModal.style.display = "flex";
});

login.addEventListener("click", function () {
  loginModal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable background scrolling when modal is open
});

register.addEventListener("click", function () {
  registerModal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable background scrolling when modal is open
});

closeBtn2.addEventListener("click", function () {
  registerModal.style.display = "none";
  document.body.style.overflow = "visible"; // Enable background scrolling when modal is closed
});

closeBtn.addEventListener("click", function () {
  loginModal.style.display = "none";
  document.body.style.overflow = "visible"; // Enable background scrolling when modal is closed
});

///////whislist///////
document.querySelectorAll(".wishlist").forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    const icon = wrapper.querySelector("i");

    icon.classList.toggle("fa-solid");
    icon.classList.toggle("fa-regular");

    wrapper.classList.toggle("active");
  });
});
