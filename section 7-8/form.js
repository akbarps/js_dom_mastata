// ==== 1. ambil elemnt ====
const form = document.querySelector("#form-login")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const btnLogin = document.querySelector("#btn-login")

//===== 2. manipulasi/ event ====
btnLogin.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("tesss log in");

    console.log(username.value);
    console.log(password.value);

    // username.value = ""
    // password.value = ""

    form.reset()
})