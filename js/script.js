console.log('JS OK')


// Recupero gli elementi dal DOM
const difficultyInput = document.getElementById('difficulty');
const playButton = document.getElementById('btn-play');
const grid = document.getElementById('grid');
const scorePlaceholder = document.getElementById('score');



// CREO UNA FUNZIONE che genera una cella numerata

 function createCell (cellNumber) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.append(cellNumber)
      return cell;
    }

// CREO UNA FUNZIONE che genera un numero casuale compreso tra 1 ed un max 
    function randomNumber (max) {
      const randomNumber = Math.floor(Math.random() * max) + 1
      return randomNumber
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

       // Genero 16 numeri randomici che corrispondono a 16 bombe
       const bombTotal = 16
       let bombsPosition = [];

       while (bombsPosition.length < bombTotal)
       
       do {
         const bombPositionNumber = randomNumber(cellTot);
         bombsPosition.push(bombPositionNumber);
       } while (bombsPosition.includes(randomNumber))

       console.log(bombsPosition)


      // In base alla scelta della difficoltà genero il numero di celle e la loro struttura 
      let score = 0;
      
      
      for (let i = 1; i <= cellTot; i++) {
          const cell = createCell (i)

          cell.classList.add(mode)
        
         


          
          
          
          // Al click sulla cella salvo il numero interno e la evidenzio 
          cell.addEventListener('click', function(event){
            
            
            // Controlliamo se la cella è già stata cliccata 
             if (event.target.classList.contains('clicked')) return;

             if (bombsPosition.includes(parseInt(event.target.innerText))){
               
               event.target.classList.add('bomb')

            } else {
              console.log(i)
              event.target.classList.add('clicked')
            
              score++
            
              console.log(score);
              scorePlaceholder.innerText = `Score:  ${score}`
            }
    
           
          })
            grid.appendChild(cell)

            
        }
      })
      
    
