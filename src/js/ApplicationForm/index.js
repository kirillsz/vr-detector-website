import handleFormSubmit from "./handleFormSubmit";
import handleInputValidate from "./handleInputValidate";

window.addEventListener("DOMContentLoaded", function () {
  /* Variables */
  const applicationForm = document.getElementById("application__form");
  const [applicationFormInput, applicationFormButton] =
    applicationForm.children;

  /* Event listeners */
  applicationForm.addEventListener("submit", (e) =>
    handleFormSubmit(e, applicationFormButton)
  );
  applicationFormInput.addEventListener("input", (e) => {
    if (handleInputValidate(e.target.value)) {
      applicationFormButton.disabled = false;
    }
    if (!handleInputValidate(e.target.value)) {
      applicationFormButton.disabled = true;
    }
  });
});
