const step1Form = document.getElementById('step-1-form');
const step2Form = document.getElementById('step-2-form');

let currentStep = 1;

const nextButton = document.getElementById('step-1-next');
const backButton = document.getElementById('step-2-back');
const submitButton = document.getElementById('step-2-submit');

const congratulationsPageUrl = "congratulation.html";

nextButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (validateForm(step1Form)) {
    document.getElementById(`step-${currentStep}`).style.display = 'none';
    currentStep++;
    document.getElementById(`step-${currentStep}`).style.display = 'block';
  }
});

backButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById(`step-${currentStep}`).style.display = 'none';
  currentStep--;
  document.getElementById(`step-${currentStep}`).style.display = 'block';
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (validateForm(step1Form) && validateForm(step2Form)) {
    const combinedForm = document.createElement('form');
    combinedForm.method = 'POST';
    combinedForm.action = 'submit.php'; // replace with your form submit URL
    
    const step1Inputs = step1Form.querySelectorAll('input');
    const step2Inputs = step2Form.querySelectorAll('input');
    
    step1Inputs.forEach(input => {
      const clonedInput = input.cloneNode(true);
      combinedForm.appendChild(clonedInput);
    });
    
    step2Inputs.forEach(input => {
      const clonedInput = input.cloneNode(true);
      combinedForm.appendChild(clonedInput);
    });
    
    document.body.appendChild(combinedForm);
    combinedForm.submit();
    
    window.location.href = congratulationsPageUrl;
  }
});

function validateForm(form) {
  let valid = true;
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.classList.add('is-invalid');
      valid = false;
    } else {
      input.classList.remove('is-invalid');
    }
  });
  return valid;
}
