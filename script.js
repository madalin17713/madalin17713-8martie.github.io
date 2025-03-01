let tapCount = 0;
const envelope = document.getElementById('envelope');
const message = document.getElementById('message');

envelope.addEventListener('click', () => {
    tapCount++;
    
    if (tapCount === 2) {
        envelope.classList.add('open');
        message.style.display = 'block';
        
        const letters = message.getElementsByTagName('span');
        Array.from(letters).forEach((letter, index) => {
            setTimeout(() => {
                letter.style.animation = 'fallDown 0.5s forwards';
            }, index * 100);
        });
    }
});
