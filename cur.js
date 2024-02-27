document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', function(event) {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
  });
  