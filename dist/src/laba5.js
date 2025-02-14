const data = [];
const record = (param) => {
    data.push(param);
    console.log('Запись: ' + param + ' Добавлена!');
    setTimeout(() => {
        const index = data.indexOf(param);
        if (index > -1) {
            data.splice(index, 1);
            console.log('Запись: ' + param + ' Убрана!');
        }
    }, 10000);
};
record("Запись 1");
record("Запись 2");
record("Запись 3");
const createLogger = (message) => {
    return () => {
        console.log('Запись: ' + message);
    };
};
const logHello = createLogger("Всем привет!");
const logGoodbye = createLogger("Пока всем!");
logHello();
logGoodbye();
