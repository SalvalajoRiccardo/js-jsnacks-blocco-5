var garage = [
    {
        nome : 'cross',
        peso : 10
    },
    {
        nome : 'mountain-bike',
        peso : 12
    },
    {
        nome : 'graziella',
        peso : 38
    }
];

var pesoMin = garage[0];

for (var i = 1; i < garage.length; i++) {
    if (garage[i].peso < pesoMin.peso) {
        pesoMin = garage[i];
    }
}

console.log(pesoMin);