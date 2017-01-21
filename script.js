'use strict'
var answerWork = prompt('Компьютер работает? Да/Нет?', '');
if (answerWork == 'Нет' || answerWork == 'нет') {
    var answerOn = prompt('Компьютер включен? Да/Нет?', '');
    if (answerOn == 'Да' || answerOn == 'да') {
        var answerOs = prompt('OC грузится? Да/Нет?', '');
        if (answerOs == 'Да' || answerOs == 'да') {
            alert('Ну тогда Ой');
            } else if (answerOs == 'Нет' || answerOs == 'нет') {
            alert('Переустанови ее');
            } else {
            alert('Обнови и введи еще раз')
            }; 
                
    } else if (answerOn == 'Нет' || answerOn == 'нет') {
    alert('Включи его')
    } else {
    alert('Обнови и введи еще раз')
    };


} else if (answerWork == 'Да' || answerWork == 'да') {
alert('Молодец');
} else {
alert('Обнови и введи еще раз');
};