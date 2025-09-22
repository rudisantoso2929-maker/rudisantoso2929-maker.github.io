// Kode ini untuk efek mengetik yang sudah Anda miliki
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typing-text');
    const textToType = "Selamat datang di portofolio saya.";
    let i = 0;
    const speed = 100;

    function typeWriter() {
        if (i < textToType.length) {
            textElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

// Kode ini adalah JQuery untuk efek hover di kartu layanan
$(document).ready(function() {

    // Ketika kursor MOUSE masuk ke area elemen dengan class 'service-card'
    $('.service-card').mouseenter(function() {
        // Efek animasi untuk membuat kartu sedikit naik
        $(this).css('transform', 'translateY(-10px)');
        $(this).css('box-shadow', '0 8px 16px rgba(0,0,0,0.3)');
    });

    // Ketika kursor MOUSE keluar dari area elemen dengan class 'service-card'
    $('.service-card').mouseleave(function() {
        // Kembalikan ke posisi semula
        $(this).css('transform', 'translateY(0)');
        $(this).css('box-shadow', '0 4px 8px rgba(0,0,0,0.2)');
    });

});