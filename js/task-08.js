const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const formElement = evt.currentTarget.elements;
  const mail = formElement.email.value;
  const password = formElement.password.value;

  if (mail === "" || password === "") {
    alert("Всі поля повинні бути заповненні!");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);

    form.reset();
  }
}
