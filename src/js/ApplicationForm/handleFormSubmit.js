function serializeForm(formNode) {
  return new FormData(formNode);
}
async function sendData(data) {
  return data;
}
function toggleLoader(button) {
  button.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
}
function onSuccess() {
  const formWrapper = document.getElementById("application__form__wrapper");
  formWrapper.innerHTML = `<p class="text-color-light centred-text font-size-text-about">Заявка отправлена!</p>`;
}
export default async function handleFormSubmit(e, applicationFormButton) {
  e.preventDefault();
  toggleLoader(applicationFormButton);
  const formData = serializeForm(e.target);
  const response = await sendData(formData);
  onSuccess();
  console.log(response);
}
