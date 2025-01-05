const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours();


let greetingText = '';
if (currentHour < 12) {
    greetingText = 'Selamat Pagi';
} else if (currentHour < 18) {
    greetingText = 'Selamat Siang';
} else {
    greetingText = 'Selamat Malam';
}

const path = window.location.pathname;
if (greetingElement) {
    if (path.includes('index.html')) {
        greetingElement.textContent = `${greetingText}!`;
    } else if (path.includes('about.html')) {
        greetingElement.textContent = `${greetingText}! `;
    } else if (path.includes('gallery.html')) {
        greetingElement.textContent = `${greetingText}! `;
    } else if (path.includes('contact.html')) {
        greetingElement.textContent = `${greetingText}! Terima kasih telah berkunjung`;
    } else {
    }
}
