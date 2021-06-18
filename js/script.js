// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

const array = [1, 2, 3, 4, 5, 6, 7, 8];

let a = parseInt(prompt('inserisci number da 1 a 8'));
let b = parseInt(prompt('inserisci number superiore a quello precedente'));


const newArray = array.filter((number) =>{
    if(number >= a && number <= b){
        return true
    }
    
    return false;
});

console.log(newArray);

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



