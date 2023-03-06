const cardSection = document.getElementById('cardSection');
const cards = cardSection.querySelectorAll('.card');
const pagination = document.getElementById('pagination');
const previousBtn = document.getElementById('previousPage');
const nextBtn = document.getElementById('nextPage');

const cardsPerPage = 5;
let currentPage = 1;

function showCards(page) {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Hide all cards
  cards.forEach(card => {
    card.style.display = 'none';
  });

  // Show the cards on the target page
  cardSection.querySelectorAll('.card').forEach((card, i) => {
    if (i >= startIndex && i < endIndex) {
      card.style.display = 'block';
    }
  });
}

function setupPagination() {
    const pageCount = Math.ceil(cards.length / cardsPerPage);
  
    // Remove any existing buttons
    pagination.innerHTML = '';
  
    // Add Previous button
    const previousButton = document.createElement('button');
    previousButton.innerText = 'Previous';
    previousButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        showCards(currentPage);
  
        pagination.querySelectorAll('button').forEach((btn) => {
          btn.classList.remove('active');
        });
  
        pagination.querySelector(`#page${currentPage}`).classList.add('active');
      }
    });
    pagination.appendChild(previousButton);
  
    // Add Page buttons
    for (let i = 1; i <= pageCount; i++) {
      const pageButton = document.createElement('button');
      pageButton.innerText = i;
      pageButton.id = `page${i}`;
  
      if (i === currentPage) {
        pageButton.classList.add('active');
      }
  
      pageButton.addEventListener('click', () => {
        currentPage = i;
        showCards(currentPage);
  
        pagination.querySelectorAll('button').forEach((btn) => {
          btn.classList.remove('active');
        });
  
        pageButton.classList.add('active');
      });
  
      pagination.appendChild(pageButton);
    }
  
    // Add Next button
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', () => {
      if (currentPage < pageCount) {
        currentPage++;
        showCards(currentPage);
  
        pagination.querySelectorAll('button').forEach((btn) => {
          btn.classList.remove('active');
        });
  
        pagination.querySelector(`#page${currentPage}`).classList.add('active');
      }
    });
    pagination.appendChild(nextButton);
  }
  

// previous, 1, 2, 3, and next page
const previousPageBtn = document.getElementById('previousPage');
const nextPageBtn = document.getElementById('nextPage');
const pageOneBtn = document.getElementById('page1');
const pageTwoBtn = document.getElementById('page2');
const pageThreeBtn = document.getElementById('page3');

previousPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showCards(currentPage);
    updatePagination();
  }
});

// page one
pageOneBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showCards(currentPage);
      updatePagination();
    }
  });

  // page two
pageTwoBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showCards(currentPage);
      updatePagination();
    }
  });

  // page three
pageThreeBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showCards(currentPage);
      updatePagination();
    }
  });

nextPageBtn.addEventListener('click', () => {
  const pageCount = Math.ceil(cards.length / cardsPerPage);
  if (currentPage < pageCount) {
    currentPage++;
    showCards(currentPage);
    updatePagination();
  }
});

function updatePagination() {
  pagination.querySelectorAll('button').forEach((btn, i) => {
    if (i === currentPage - 1) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  previousPageBtn.classList.toggle('disabled', currentPage === 1);
  nextPageBtn.classList.toggle('disabled', currentPage === Math.ceil(cards.length / cardsPerPage));
}


showCards(currentPage);
setupPagination();
