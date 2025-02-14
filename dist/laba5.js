"use strict";

const records = [];

const addRecord = (record) => {
    records.push(record);
    console.log('Запись ' + record + 'Добавлена!');

    setTimeout(() => {
        const index = records.indexOf(record);
        if (index > -1) {
            records.splice(index, 1);
            console.log('Запись ' + record + ' Удалена');
        }
    }, 10000);
};

addRecord("Запись 1");
addRecord("Запись 2");
addRecord("Запись 3");

const createLogger = (message) => {
    return () => {
        console.log('Запись ' + message);
    };
};

const logHello = createLogger("Всем привет!");
const logGoodbye = createLogger("Пока всем");

logHello();
logGoodbye();