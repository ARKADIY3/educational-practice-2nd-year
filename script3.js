function updateCountdown() {
    var endDate = new Date('2024-05-22 23:59:59');
    var now = new Date();
    
    var timeLeft = endDate.getTime() - now.getTime();
    
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = days + "д " + hours + "ч " + minutes + "м " + seconds + "с ";
  }
  setInterval(updateCountdown, 1000);

