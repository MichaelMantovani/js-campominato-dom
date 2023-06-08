console.log('JS OK')


// Recupero gli elementi dal DOM
const difficultyInput = document.getElementById('difficulty');
const playButton = document.getElementById('btn-play');
const grid = document.getElementById('grid')


// CREO UNA FUNZIONE che genera una cella numerata

 function createCell (cellNumber) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.append(cellNumber)
      return cell;
    }


    // Al click del bottone genero la griglia di gioco
    playButton.addEventListener('click', function(){

      // Recupero il valore della scelta della difficoltà
      const difficulty = difficultyInput.value
      grid.innerHTML = ''

      // Verifico la scelta dell'utente
      let cellTot = 100
      let mode = 'easy'
      if (difficulty == 2){
        cellTot = 81
        mode = 'medium'
      } else if (difficulty == 3){
        cellTot = 49
        mode = 'hard'
      } 

      // In base alla scelta della difficoltà genero il numero di celle e la loro struttura 
      for (let i = 1; i <= cellTot; i++) {
          const cell = createCell (i)

          cell.classList.add(mode)
              
          // Al click sulla cella salvo il numero interno e la evidenzio 
          cell.addEventListener('click', function(){
            console.log(i)
            this.classList.add('clicked')
          })
            grid.appendChild(cell)
        }
      })
      
    
