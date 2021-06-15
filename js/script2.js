var zucchine = [
    {
        varieta: 1,
        peso: 2,
        lunghezza: 7 
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
        lunghezza: 13
    },
    {
        varieta: 4,
        peso: 6,
        lunghezza: 9 
    },
    {
        varieta: 5,
        peso: 5,
        lunghezza: 7 
    },
    {
        varieta: 5,
        peso: 2,
        lunghezza: 7 
    },
    {
        varieta: 2,
        peso: 2,
        lunghezza: 5
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

var ris = 0;

for (var i = 0; i < zucchine.length; i++) {
    ris += zucchine[i].peso;
}

console.log(ris);