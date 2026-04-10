const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const photos = document.querySelectorAll('.photo');

let animationIntervals = {};

photos.forEach((photo, index) => {
    // Mouseenter - Start wiggle animation
    photo.addEventListener('mouseenter', function() {
        if (animationIntervals[index]) clearInterval(animationIntervals[index]);
        
        let angle = 0;
        let direction = 1;
        
        animationIntervals[index] = setInterval(() => {
            angle += direction * 2;
            
            if (angle >= 2) direction = -1;
            if (angle <= -2) direction = 1;
            
            photo.style.transform = `translateY(-10px) rotate(${angle}deg)`;
            photo.style.boxShadow = '0 12px 20px rgba(0,0,0,0.2)';
        }, 30);
    });

    // Mouseleave - Stop animation
    photo.addEventListener('mouseleave', function() {
        if (animationIntervals[index]) clearInterval(animationIntervals[index]);
        photo.style.transform = 'translateY(0) rotate(0deg)';
        photo.style.boxShadow = 'none';
    });

    // Click - Open modal
    photo.addEventListener('click', function() {
        const img = this.querySelector('img');
        modalImg.src = img.src;
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
