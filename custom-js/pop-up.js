// Get the edit button element
const editBtn = document.getElementById('edit-btn');

// Get the pop-up form container and close button elements
const popFormContainer = document.querySelector('.pop-form-container');
const closeBtn = document.getElementById('close-btn');

// When the edit button is clicked, show the pop-up form
editBtn.addEventListener('click', () => {
  popFormContainer.style.display = 'block';
});

// When the close button is clicked, hide the pop-up form
closeBtn.addEventListener('click', () => {
  popFormContainer.style.display = 'none';
});
