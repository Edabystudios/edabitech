// Load the Google Analytics script asynchronously
const script = document.createElement('script');
script.async = true;  // Ensure the script loads asynchronously
script.src = "https://www.googletagmanager.com/gtag/js?id=G-YCXXDZG15H";  // Google Analytics URL
document.head.appendChild(script);  // Add the script tag to the head

// Initialize Google Analytics once the script is loaded
script.onload = function() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YCXXDZG15H');  // Replace with your Google Analytics ID
};
