// Confirindo o login e a senha

const captureBtn = document.querySelector('#btn-login');
const captureEmail = document.querySelector('#form');
const capturePassword = document.querySelector('#input-password');

function verification() {
  captureBtn.addEventListener('click', () => {
    if (captureEmail.value === 'tryber@teste.com' && capturePassword.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

verification();

// Habilitando e Desabilitanto o Botão enviar do formúlario

const captureBtnForm = document.querySelector('#submit-btn');

const captureCheckbox = document.querySelector('#agreement');

captureBtnForm.disabled = true;

captureCheckbox.addEventListener('click', () => {
  if (captureCheckbox.checked !== true) {
    captureBtnForm.disabled = true;
  } else {
    captureBtnForm.disabled = false;
  }
});
