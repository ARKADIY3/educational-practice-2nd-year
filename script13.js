const form = document.getElementById('feedbackForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const feedback = document.getElementById('feedback').value;

  
  console.log('Письмо:', feedback);
  
alert('Вы успешно отправили письмо');
});

