var hund = 0;
var sec = 0;
var min = 0;
var hours = 0;
var interval;

function twoDigits (digit) {
    if(digit < 10) {
        return ('0' + digit);
    } else {
        return (digit);
    };
};

function start() {
    time();
    if(status == 'start') {
        return;
    };
    status = 'start';
    interval = setInterval(time, 10);
};

function pause() {
    status = 'pause';
    clearInterval(interval);
};

function reset () {
    status = 'pause';
    clearInterval(interval);
    hours = 0;
    min = 0;
    sec = 0;
    hund = 0;
    document.getElementById('timer').innerText = '00:00:00,00';
};

function time () {
    hund += 1;

    if(hund == 100) {
        sec += 1;
        hund = 0;
    };

    if(sec == 60) {
         min += 1;
        sec = 0;
    };

    if(min == 60) {
        hours += 1;
        min = 0;
    };

    document.getElementById('timer').innerText = twoDigits(hours) + ':' + twoDigits(min) + ':' + twoDigits(sec) + ',' + twoDigits(hund);
};
