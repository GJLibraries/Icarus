
var windows = windows || {};
windows.Icarus = {};

// Добавление метода в объект Icarus
windows.Icarus.myMethod = function() {
    console.log('Мой метод Icarus запущен!');
};

// Запуск метода Icarus после загрузки страницы
window.onload = function() {
    windows.Icarus.myMethod();
};