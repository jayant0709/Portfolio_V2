document.addEventListener('mousemove', function(e) {
    var dot = document.getElementById('cursor-dot'); // Assuming you have an element with id="cursor-dot"
    if (!dot) {
        dot = document.createElement('div');
        dot.id = 'cursor-dot';
        dot.style.position = 'fixed';
        dot.style.width = '25px'; // Adjust dot size as needed
        dot.style.height = '25px'; // Adjust dot size as needed
        dot.style.backgroundColor = 'rgba(0, 123, 255, 0.3)'; // Blue dot color
        dot.style.borderRadius = '50%'; // Shape the dot as a circle
        dot.style.pointerEvents = 'none'; // Ensure the dot doesn't interfere with click events
        dot.style.transition = 'transform 0.1s ease, opacity 0.5s ease'; // Smooth transitions
        document.body.appendChild(dot); // Append dot to body
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

document.getElementById('submitBtn').addEventListener('click', handleSubmit);





