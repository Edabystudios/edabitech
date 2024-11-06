const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "9jaMix",
  "image": "https://9jamix.com.ng/logo.jpg",  // Replace with your actual image URL
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shelter Afrique",
    "addressLocality": "Uyo",
    "addressRegion": "AKS",
    "postalCode": "555002",
    "addressCountry": "NG"
  },
  "telephone": "+234-701-109-7887",  // Your actual phone number
  "openingHours": "Mo-Fr 08:00-18:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",  // Average rating
    "bestRating": "5",  // Highest possible rating
    "ratingCount": "352"  // Total number of ratings
  },
  "url": "https://9jamix.com.ng",  // Your website URL
  "description": "Your no.1 sure plug for latest music, gist, trends, and news all in one place."
};

// Create a <script> element
const script = document.createElement('script');
script.type = 'application/ld+json';
script.innerHTML = JSON.stringify(schemaData);

// Append the script to the head of the document
document.head.appendChild(script);
