// Get the education edit button element
const educationEditBtn = document.getElementById('education-edit-btn');

// Get the education pop-up form container and close button elements
const educationPopFormContainer = document.querySelector('.pop-form-container-edu');
const educationCloseBtn = document.querySelector('.education-close-btn');

// When the education edit button is clicked, show the education pop-up form
educationEditBtn.addEventListener('click', () => {
  educationPopFormContainer.style.display = 'block';
});

// When the education close button is clicked, hide the education pop-up form
educationCloseBtn.addEventListener('click', () => {
  educationPopFormContainer.style.display = 'none';
});
