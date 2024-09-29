function vote() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (!selectedOption) {
        alert("Пожалуйста, выберите вариант");
        return;
    }
switch (selectedOption.value) {
    case 'VESTA':
        window.location.href = 'index8.html';
    alert("Хороший выбор");
        break;
    case 'GRANTA':
        window.location.href = 'index7.html';
        alert("Хороший выбор");
        break;
    case 'LARGUS':
        window.location.href = 'index9.html';
        alert("Хороший выбор");
        break;
    case 'NIVA LEGEND':
        window.location.href = 'index10.html';        
        alert("Хороший выбор");
        break;
    case 'NIVA TRAVEL':
        window.location.href = 'index11.html';
        alert("Хороший выбор");
        break;
    default:
        alert("Что-то пошло не так");
    }
}
