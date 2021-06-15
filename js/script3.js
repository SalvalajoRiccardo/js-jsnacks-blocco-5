var zucchine = [
    {
        varieta: 1,
        peso: 2,
        lunghezza: 17 
    },
    {
        varieta: 2,
        peso: 3,
        lunghezza: 4 
    },
    {
        varieta: 2,
        peso: 5,
        lunghezza: 12 
    },
    {
        varieta: 3,
        peso: 1,
        lunghezza: 16
    },
    {
        varieta: 4,
        peso: 6,
        lunghezza: 9 
    },
    {
        varieta: 5,
        peso: 5,
        lunghezza: 23 
    },
    {
        varieta: 5,
        peso: 2,
        lunghezza: 7 
    },
    {
        varieta: 2,
        peso: 2,
        lunghezza: 21
    },
    {
        varieta: 3,
        peso: 1,
        lunghezza: 6
    },
    {
        varieta: 6,
        peso: 4,
        lunghezza: 9
    },
];


var lunghe = [];
var corte = [];

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        corte.push(zucchine[i].peso);
    } else {
        lunghe.push(zucchine[i].peso);
    }
}

var totCorte = corte.reduce(function(a, b){
    return a + b;
});

var totLunghe = lunghe.reduce(function(a, b){
    return a + b;
});


console.log(corte);
console.log(totCorte);
console.log(lunghe);
console.log(totLunghe);

