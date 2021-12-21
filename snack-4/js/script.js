let cifraScelta = prompt('inserisci un numero formato da 4 cifre');
somma = 0;

while (cifraScelta) {
    somma += cifraScelta % 10;
    cifraScelta = Math.floor(cifraScelta / 10);
}

console.log(somma);