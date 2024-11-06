let newsData = [
    {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },
    {
        title: "Second News Headline",
        summary: "A brief summary for the second news article.",
        imageUrl: "https://example.com/path-to-image2.jpg"
    },
	  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },  {
        title: "Headline of the First News Article",
        summary: "A short summary for the first news article.",
        imageUrl: "https://example.com/path-to-image1.jpg"
    },
	
    // Add more news objects as needed
];

const itemsPerPage = 10; // Display 5 news items per page
let currentPage = 1;

function displayNewsPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newsToDisplay = newsData.slice(startIndex, endIndex);

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = newsToDisplay.map(news => `
        <div class="news-item">
            <div class="news-image">
                <img src="${news.imageUrl}" alt="News Image">
            </div>
            <div class="news-content">
                <div class="news-topic">${news.title}</div>
                <div class="news-summary">${news.summary}</div>
                <a href="#" class="read-more">Read more</a>
            </div>
        </div>
    `).join('');

    // Update pagination controls
    const totalPages = Math.ceil(newsData.length / itemsPerPage);
    document.getElementById('pagination').innerHTML = `
        <button onclick="changePage(${page - 1})" ${page === 1 ? 'disabled' : ''}>Previous</button>
        <span id="page-info">Page ${page} of ${totalPages}</span>
        <button onclick="changePage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>Next</button>
    `;
}

function changePage(page) {
    if (page < 1 || page > Math.ceil(newsData.length / itemsPerPage)) return;
    currentPage = page;
    displayNewsPage(currentPage);
}

displayNewsPage(currentPage); // Initial call to display the first page

