const card = document.getElementById('card');
const heart = document.getElementById('heart');
const likeCountDisplay = document.getElementById('likeCount');

let clickTime = 0;
let likes = 0;

card.addEventListener('click', function(e) {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
});

function createHeart(e) {
    likes++;
    likeCountDisplay.textContent = likes;

    heart.classList.remove('active');
    
    // Trigger reflow to restart animation
    void heart.offsetWidth;
    
    heart.classList.add('active');
}
