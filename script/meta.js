// Function to create a meta tag with specified attributes
function createMetaTag(attributes) {
    const meta = document.createElement('meta');
    for (const key in attributes) {
        meta.setAttribute(key, attributes[key]);
    }
    document.head.appendChild(meta);
}

// Open Graph Meta Tags
createMetaTag({
    property: 'og:title',
    content: '9jaMix'
});
createMetaTag({
    property: 'og:description',
    content: 'Your no.1 sure plug for latest music, gist, news and trends all in one place.'
});
createMetaTag({
    property: 'og:image',
    content: 'https://9jamix.com.ng/logo.jpg'
});
createMetaTag({
    property: 'og:url',
    content: 'https://9jamix.com.ng'
});
createMetaTag({
    property: 'og:type',
    content: 'article'
});

// Optional Open Graph Meta Tags
createMetaTag({
    property: 'og:site_name',
    content: '9jamix.com'
});
createMetaTag({
    property: 'og:locale',
    content: 'en_US'
});

// Canonical link
const linkCanonical = document.createElement('link');
linkCanonical.rel = 'canonical';
linkCanonical.href = 'https://www.9jamix.com.ng/';
document.head.appendChild(linkCanonical);

// Apple Touch Icon
const appleIcon = document.createElement('link');
appleIcon.rel = 'apple-touch-icon';
appleIcon.sizes = '180x180';
appleIcon.href = 'https://9jamix.com.ng/apple-touch-icon.png';
document.head.appendChild(appleIcon);

// Favicon icons
const favicon32 = document.createElement('link');
favicon32.rel = 'icon';
favicon32.type = 'image/png';
favicon32.sizes = '32x32';
favicon32.href = 'https://9jamix.com.ng/favicon-32x32.png';
document.head.appendChild(favicon32);

const favicon16 = document.createElement('link');
favicon16.rel = 'icon';
favicon16.type = 'image/png';
favicon16.sizes = '16x16';
favicon16.href = 'https://9jamix.com.ng/favicon-16x16.png';
document.head.appendChild(favicon16);

// Web manifest
const manifest = document.createElement('link');
manifest.rel = 'manifest';
manifest.href = 'https://9jamix.com.ng/site.webmanifest';
document.head.appendChild(manifest);

// Meta description
createMetaTag({
    name: 'description',
    content: 'Your no.1 Plug for trending 9ja music, news, and engaging content cooked together all in one place.'
});

// Meta keywords
createMetaTag({
    name: 'keywords',
    content: 'Trending Music 2024, Content Creators Hub'
});

// Google AdSense Account ID
createMetaTag({
    name: 'google-adsense-account',
    content: 'ca-pub-8985882677432417'
});

// Viewport Meta Tag
createMetaTag({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0'
});
