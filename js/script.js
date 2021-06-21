// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

 const array = [1, 2, 3, 4, 5, 6, 7, 8];


 let a = parseInt(prompt('inserisci number da 1 a 8'));
 let b = parseInt(prompt('inserisci number superiore a quello precedente'));


 const newArray = array.filter((element, index) =>{
     if(index >= a && index <= b){
         return true
     }
    
     return false;
 });



 console.log(newArray);

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


// const array = [12,45,33,78,84,17,99];


// let a = parseInt(prompt('inserisci numero'));
// let b = parseInt(prompt('inserisci numero'));



// const mieiNumeri = numeri.filter((element, index) => index >= a && index <= b);

// console.log(mieiNumeri);

// let arrayVuoto = [];

// array.forEach((element, index) =>  {
//     if(index >= a && index <= b ){
//     arrayVuoto.push(element);
//     }
// })
