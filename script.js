//Confirindo o login e a senha

const captureBtn = document.querySelector("#btn-login");
const captureEmail = document.querySelector("#form");
const capturePassword = document.querySelector("#input-password");

function verification() {
    captureBtn.addEventListener("click", function(){
        if (captureEmail.value === "tryber@teste.com" && capturePassword.value === "123456") {
            alert("Olá, Tryber!")
        } else {
            alert("Email ou senha inválidos.")
        }
    })
}

verification();