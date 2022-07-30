const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let str = ''
    for (let i=0; i < expr.length; i=i+10) {
        arr[i/10] = expr.slice(i,i+10);
        if (arr[i/10] == '**********') { arr[i/10] = ' '}
        else {(arr[i/10] = Number(arr[i/10]).toString())}
        console.log[arr[i/10]]
    }
    for (let i=0; i<arr.length; i++) {
        arr[i] = arr[i].replace(/10/g, '.')
        arr[i] = arr[i].replace(/11/g, '-')
        console.log[arr[i]]
    }
    for (let i=0; i< arr.length; i++) {
        if (arr[i] == ' ') {
            str += arr[i];
        }
        if ( arr[i] == '.-') {
            arr[i] = 'a';
            str += arr[i];
        }
        if ( arr[i] == '-...') {
            arr[i] = 'b';
            str += arr[i];
        }
        if ( arr[i] == '-.-.') {
            arr[i] = 'c';
            str += arr[i];
        }
        if ( arr[i] == '-..') {
            arr[i] = 'd';
            str += arr[i];
        }
        if ( arr[i] == '.') {
            arr[i] = 'e';
            str += arr[i];
        }
        if ( arr[i] == '..-.') {
            arr[i] = 'f';
            str += arr[i];
        }
        if ( arr[i] == '--.') {
            arr[i] = 'g';
            str += arr[i];
        }
        if ( arr[i] == '....') {
            arr[i] = 'h';
            str += arr[i];
        }
        if ( arr[i] == '..') {
            arr[i] = 'i';
            str += arr[i];
        }
        if ( arr[i] == '.---') {
            arr[i] = 'j';
            str += arr[i];
        }
        if ( arr[i] == '-.-') {
            arr[i] = 'k';
            str += arr[i];
        }
        if ( arr[i] == '.-..') {
            arr[i] = 'l';
            str += arr[i];
        }
        if ( arr[i] == '--') {
            arr[i] = 'm';
            str += arr[i];
        }
        if ( arr[i] == '-.') {
            arr[i] = 'n';
            str += arr[i];
        }
        if ( arr[i] == '---') {
            arr[i] = 'o';
            str += arr[i];
        }
        if ( arr[i] == '.--.') {
            arr[i] = 'p';
            str += arr[i];
        }
        if ( arr[i] == '--.-') {
            arr[i] = 'q';
            str += arr[i];
        }
        if ( arr[i] == '.-.') {
            arr[i] = 'r';
            str += arr[i];
        }
        if ( arr[i] == '...') {
            arr[i] = 's';
            str += arr[i];
        }
        if ( arr[i] == '-') {
            arr[i] = 't';
            str += arr[i];
        }
        if ( arr[i] == '..-') {
            arr[i] = 'u';
            str += arr[i];
        }
        if ( arr[i] == '...-') {
            arr[i] = 'v';
            str += arr[i];
        }
        if ( arr[i] == '.--') {
            arr[i] = 'w';
            str += arr[i];
        }
        if ( arr[i] == '-..-') {
            arr[i] = 'x';
            str += arr[i];
        }
        if ( arr[i] == '-.--') {
            arr[i] = 'y';
            str += arr[i];
        }
        if ( arr[i] == '--..') {
            arr[i] = 'z';
            str += arr[i];
        }
        if ( arr[i] == '.----') {
            arr[i] = '1';
            str += arr[i];
        }
        if ( arr[i] == '..---') {
            arr[i] = '2';
            str += arr[i];
        }
        if ( arr[i] == '...--') {
            arr[i] = '3';
            str += arr[i];
        }
        if ( arr[i] == '....-') {
            arr[i] = '4';
            str += arr[i];
        }
        if ( arr[i] == '.....') {
            arr[i] = '5';
            str += arr[i];
        }
        if ( arr[i] == '-....') {
            arr[i] = '6';
            str += arr[i];
        }
        if ( arr[i] == '--...') {
            arr[i] = '7';
            str += arr[i];
        }
        if ( arr[i] == '---..') {
            arr[i] = '8';
            str += arr[i];
        }
        if ( arr[i] == '----.') {
            arr[i] = '9';
            str += arr[i];
        }
        if ( arr[i] == '-----') {
            arr[i] = '0';
            str += arr[i];
        }
    }
    return str
}

module.exports = {
    decode
}