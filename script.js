const textElements = document.getElementById('changing-text');
const words = ['Richmond', 'an Instrumentalist', 'a Developer', 'always learning'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typewriter() {
    const currentWord = words[wordIndex];
    textElements.textContent = currentWord.substring(0, charIndex);
    if (isDeleting) {
        charIndex--;
    } else {
        textElements.textContent = currentWord.substring(0, charIndex);
        charIndex++;
    }

    textElements.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typewriter, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typewriter, 500);
    } else {
        setTimeout(typewriter, isDeleting ? 100 : 200);
    }
}

typewriter();