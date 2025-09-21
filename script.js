document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typing-text');
    const textToType = "Selamat datang di portofolio saya.";
    let i = 0;
    const speed = 100; // Kecepatan ketik dalam milidetik

    function typeWriter() {
        if (i < textToType.length) {
            textElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});