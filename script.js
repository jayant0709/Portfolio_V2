document.addEventListener('mousemove', function(e) {
    var dot = document.getElementById('cursor-dot');
    if (!dot) {
        dot = document.createElement('div');
        dot.id = 'cursor-dot';
        dot.style.position = 'fixed';
        dot.style.width = '25px';
        dot.style.height = '25px';
        dot.style.backgroundColor = 'rgba(0, 123, 255, 0.3)';
        dot.style.borderRadius = '50%';
        dot.style.pointerEvents = 'none';
        dot.style.transition = 'transform 0.1s ease, opacity 0.5s ease';
        document.body.appendChild(dot);
    }
    
    var offsetX = 10;
    var offsetY = 10;
    
    dot.style.transform = 'translate(' + (e.pageX - offsetX) + 'px, ' + (e.pageY - offsetY) + 'px)';
});

function handleSubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    document.getElementById('contactForm').reset();

    showSnackbar('Thank you for your message!');
}
function showSnackbar(message) {
    const snackbar = document.createElement('div');
    snackbar.className = 'snackbar';
    snackbar.textContent = message;

    document.body.appendChild(snackbar);

    setTimeout(function() {
        snackbar.classList.add('show');
    }, 100);

    setTimeout(function() {
        snackbar.classList.remove('show');
        setTimeout(function() {
            snackbar.remove();
        }, 300);
    }, 3000);
}

function handleResume(event){
    showSnackbar('Shushh...Not now...Hehe!!')
}

document.getElementById('submitBtn').addEventListener('click', handleSubmit);

document.getElementById('resumeBtn').addEventListener('click', handleResume);



