const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const togglePassword = document.getElementById('togglePassword');

phoneInput.addEventListener('input', validate);
passwordInput.addEventListener('input', validate);

function validate() {
  if (phoneInput.value && passwordInput.value) {
    submitBtn.disabled = false;
    submitBtn.classList.add('enabled');
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove('enabled');
  }
}

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
});

submitBtn.addEventListener('click', () => {
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();

  if (phone === "998 93 492 13 22" && password === "бумага") {
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);
    window.location.pathname = "main.html";
  } else {
    alert("Noto'g'ri ma'lumot!");
  }
});
