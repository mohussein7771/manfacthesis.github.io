const form = document.querySelector('div#upload-form-container form');
const toggleBtn = document.querySelector('#toggle-form');
const hideBtn = document.querySelector('#hide-form');
const documentCardsShow = document.querySelector('#document-cards');

toggleBtn.addEventListener('click', () => {
  form.style.display = 'block';
  toggleBtn.style.display = 'none';
});

hideBtn.addEventListener('click', () => {
  form.style.display = 'none';
  toggleBtn.style.display = 'block';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = form.title.value;
  const author = form.author.value;
  const university = form.university.value;
  const pdf = form.pdf.files[0];
  const cover = form.cover.files[0];
  const publishedDate = form.publishedDate.value;

  const reader = new FileReader();

  reader.addEventListener('load', () => {
    const card = document.createElement('div');
    card.classList.add('document-card');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = reader.result;

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const documentTitle = document.createElement('h2');
    documentTitle.textContent = title;
    textContainer.appendChild(documentTitle);

    const documentAuthor = document.createElement('p');
    documentAuthor.textContent = `By: ${author}`;
    textContainer.appendChild(documentAuthor);

    const documentUniversity = document.createElement('p');
    documentUniversity.textContent = `University: ${university}`;
    textContainer.appendChild(documentUniversity);

    const documentDate = document.createElement('p');
    documentDate.textContent = `Published on: ${publishedDate}`;
    textContainer.appendChild(documentDate);

    const downloadLink = document.createElement('a');
    downloadLink.textContent = 'Download PDF';
    downloadLink.href = URL.createObjectURL(pdf);
    downloadLink.target = '_blank';
    textContainer.appendChild(downloadLink);

    card.appendChild(textContainer);

    documentCardsShow.appendChild(card);
  });

  reader.readAsDataURL(cover);
});


// 
// Get DOM elements
// Dummy data
const documents = [
  {
    title: "Thesis 1",
    author: "John Doe",
    university: "Civil Service Institute",
    publishedDate: "2022-02-01"
  },
  {
    title: "Thesis 2",
    author: "Jane Doe",
    university: "Gollis University",
    publishedDate: "2022-02-15"
  },
  {
    title: "Thesis 3",
    author: "Bob Smith",
    university: "Admas University",
    publishedDate: "2022-03-01"
  }
];

// Function to search documents
function searchDocuments() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const universityFilter = document.getElementById("filter-university").value;
  const publicationDateFilter = document.getElementById("publication-date").value;
  const authorNameFilter = document.getElementById("author-name").value.toLowerCase();

  const filteredDocuments = documents.filter((document) => {
    const title = document.title.toLowerCase();
    const author = document.author.toLowerCase();
    const university = document.university.toLowerCase();
    const publishedDate = document.publishedDate;

    const titleMatches = title.includes(searchTerm);
    const authorMatches = author.includes(authorNameFilter);
    const universityMatches = !universityFilter || university === universityFilter.toLowerCase();
    const publicationDateMatches = !publicationDateFilter || publishedDate === publicationDateFilter;

    return titleMatches && authorMatches && universityMatches && publicationDateMatches;
  });

  // Render the filtered documents
  renderDocuments(filteredDocuments);
}




