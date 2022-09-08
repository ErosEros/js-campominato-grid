console.log('JS OK')

// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
/* Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro se il numero progressivo è pari,
 di verde se dispari. Inoltre emette un messaggio in console con il numero della cella cliccata. */


//seleziono il bottone che genererà una griglia quadrata
const buttonGrid = document.getElementById('Button-grid');

//assegno un evento al bottone che genera una griglia
buttonGrid.addEventListener('click', function(){
    console.log('hai fatto un click');

// seleziono l'elemento con id grid
const gridTable = document.getElementById('grid');
    gridTable.innerHTML = ''
    // creo le celle per ogni numero e genero numeri da 1 a 100
    for(let i = 1; i <= 100; i++){
        console.log([i])

        // creo un elemento div nell html
        const cellaGrid = document.createElement('div');
        // assegno una classe all'elemento div 
        cellaGrid.className = 'cella';
        
        //aggiugno gli elementi alla griglia 
        gridTable.append(cellaGrid)
        // stampo il risultato nell'elemento grid nell html
        cellaGrid.innerHTML = i;

       
    }
})
























