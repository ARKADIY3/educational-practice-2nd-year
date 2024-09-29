const form = document.getElementById('feedbackForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const feedback = document.getElementById('feedback').value;

alert('отзыв успешно отправлен')
  
  console.log('Отзыв:', feedback);
});

