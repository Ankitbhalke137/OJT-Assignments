const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        const overlay = this.querySelector('.overlay');
        
        img.style.transform = 'scale(1.2)';
        overlay.style.opacity = '1';
    });

    item.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        const overlay = this.querySelector('.overlay');
        
        img.style.transform = 'scale(1)';
        overlay.style.opacity = '0';
    });
});
