const registerBtn = document.getElementById("register");
const container =document.getElementById("Container");
const loginBtn = document.getElementById("Login")

registerBtn.addEventListener('click', () => {
    Container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    Container.classList.remove("active");
});
