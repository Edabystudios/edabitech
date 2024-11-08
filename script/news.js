let newsData = [
    {
        title: "20 passengers die as tipper rams into 18-seater bus in Imo (photos)",
        summary: "Tears, screams, and sorrow engulfed the scene as 20 passengers tragically lost their lives when a tipper truck collided with an 18-seater bus in Imo. (Photos)",
        imageUrl: "https://9jaflaver.com/wp-content/uploads/2024/11/FB_IMG_1730899054700_1730899326-70x70.jpg.webp"
    },
    {
        title: "Elon Musk’s wealth increases by $13bn after Trump’s win",
        summary: "Elon Musk, CEO of Tesla and owner of X (formerly Twitter), saw his net worth climb by approximately $13 billion as Tesla shares rose 13% following Donald Trump's self-declared U.S. presidential election victory. Investors speculated that Trump’s win might create favorable conditions for Tesla, fueling a surge in stock prices. Musk, a prominent Trump supporter, has reportedly contributed nearly $119 million to Trump’s campaign through a political action committee. Despite Trump's skepticism toward electric vehicles (EVs) and pledges to repeal EV incentives, analysts believe Tesla may withstand policy changes and maintain its competitive edge in a shifting market.",
        imageUrl: "https://9jaflaver.com/wp-content/uploads/2024/11/T…AIGN-PA-74_1729081328284_1730869055179-70x70.webp"
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

