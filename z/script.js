    // Массив с URL изображений, которые вы хотите листать
    var images = [
        'src/image1.jpg',
        'src/image2.jpg',
        'src/image3.jpg'
    ];
    
    var currentImageIndex = 0; // Индекс текущего изображения
    
    // Функция для обновления изображения на странице
    function updateImage() {
        var imageElement = document.querySelector('.background-image img');
        imageElement.src = images[currentImageIndex];
    }
    
    // Обработчик клика на кнопку "←" (предыдущее изображение)
    document.getElementById('prev-button').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    });
    
    // Обработчик клика на кнопку "→" (следующее изображение)
    document.getElementById('next-button').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    });
    
    // Инициализация изображения
    updateImage();