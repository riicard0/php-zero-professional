const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

username.addEventListener("blur", () => {
  checkInputUsername();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})

password.addEventListener("blur", () => {
  checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () => {
  checkInputPasswordConfirmation();
})

function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha o nome do usuário!");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputEmail(){
  const emailValue = email.value;

  const isEmailValid = validateEmail(emailValue);

  if(isEmailValid){
    const formItem = email.parentElement;
    formItem.className = "form-content";
  } else if(emailValue === ""){
    errorInput(email, "O e-mail é obrigatório!");
  } else {
    errorInput(email, "E-mail inválido!");
  }
}

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "A senha é obrigatória!");
  } else if(passwordValue.length < 8){
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPasswordConfirmation(){
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if(confirmationPasswordValue === ""){
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória!")
  } else if(confirmationPasswordValue !== passwordValue){
    errorInput(passwordConfirmation, "As senhas não são iguais!")
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content";
  }
}

function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content";
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!");
  }
}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error"
}