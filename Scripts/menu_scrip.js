window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 900 && scrollPosition <= 2100) {
        var image = document.querySelector('.adaptive_img');
        var newPosition = scrollPosition - 900 + 50; /* Вычисляем новую позицию изображения */
        image.style.top = newPosition + 'px'; /* Устанавливаем новую позицию изображения */
    }
});