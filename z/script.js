    var images = [
        'src/image1.jpg',
        'src/image2.jpg',
        'src/image3.jpg'
    ];
    
    var currentImageIndex = 0;
    
    function updateImage() {
        var imageElement = document.querySelector('.background-image img');
        imageElement.src = images[currentImageIndex];
    }
    
    document.getElementById('prev-button').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    });
    
    document.getElementById('next-button').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    });
    
    updateImage();

    document.addEventListener("DOMContentLoaded", function () {

        const header = document.querySelector("header");

        const colorToggleButton = document.getElementById("color-toggle-button");
    
        colorToggleButton.addEventListener("click", function () {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        header.style.backgroundColor = randomColor;
        });
    });
  