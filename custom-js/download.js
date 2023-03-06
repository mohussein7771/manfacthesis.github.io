// this code is for the preview button and abstract
const previewButton = document.getElementById("preview-btn");
const abstractView = document.getElementById("abstract-view");

previewButton.addEventListener("click", function() {
  if (abstractView.style.display === "none") {
    abstractView.style.display = "block";
  } else {
    abstractView.style.display = "none";
  }
});

// this code is for the like button and like numbers
// Get the like button and like number element by their IDs
const likeButton = document.getElementById('liked');
const likeNumber = document.getElementById('number-of-likes');

// Set initial like count to 109
let count = 109;

// Add click event listener to the like button
likeButton.addEventListener('click', () => {
  // Toggle the like button class to change its appearance
  likeButton.classList.toggle('liked');

  // Increment or decrement the count based on the button state
  if (likeButton.classList.contains('liked')) {
    count++;
  } else {
    count--;
  }

  // Update the like number with the new count
  likeNumber.textContent = ` ${count} Likes`;
});

// this code is for the download button and number of downloads
// get elements
const downloadBtn = document.getElementById('download-btns');
const downloadCount = document.getElementById('number-of-downloads');

// initialize download count
let downloads = parseInt(downloadCount.textContent);

// add event listener to download button
downloadBtn.addEventListener('click', () => {
  // increment download count
  downloads += 1;
  downloadCount.textContent = `${downloads} Downloads`;
  
  // open pdf in new tab
  window.open('/path/to/pdf/document.pdf', '_blank');
});


// interchanging the inital card and similar thesis card
// Get the initial card and similar thesis card elements
const initialCard = document.getElementById("initial-card");
const similarThesisCards = document.querySelectorAll(".similar-thesis");

// Loop through each similar thesis card
similarThesisCards.forEach((card) => {
  // Get the download button element for this card
  const downloadBtn = card.querySelector(".btn-primary");

  // Attach a click event listener to the download button
  downloadBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get the card body element for this card
    const cardBody = card.querySelector(".card-body");

    // Get the corresponding elements in the initial card
    const initialCardBody = initialCard.querySelector(".card-body");
    const initialDownloadBtn = initialCardBody.querySelector(".btn-primary");
    const initialLikes = initialCardBody.querySelector(".likes-count");
    const initialDownloads = initialCardBody.querySelector(".downloads-count");

    // Update the initial card with the data from the clicked card
    initialCardBody.querySelector(".card-title").textContent = cardBody.querySelector(".card-title").textContent;
    initialCardBody.querySelector(".card-text.author").textContent = cardBody.querySelector(".card-text.author").textContent;
    initialCardBody.querySelector(".card-text.university").textContent = cardBody.querySelector(".card-text.university").textContent;
    initialCardBody.querySelector(".card-text.field").textContent = cardBody.querySelector(".card-text.field").textContent;
    initialCardBody.querySelector(".card-text.published-date").textContent = cardBody.querySelector(".card-text.published-date").textContent;
    initialLikes.textContent = cardBody.querySelector(".likes-count").textContent;
    initialDownloads.textContent = cardBody.querySelector(".downloads-count").textContent;
    initialDownloadBtn.href = downloadBtn.href;
  });
});
