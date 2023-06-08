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
    function getRandomNumber (max) {
      const randomNumber = Math.floor(Math.random() * max) + 1;
      return randomNumber;
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

       while (bombsPosition.length < bombTotal){

       let bombPositionNumber;
       
        do {
         
          bombPositionNumber = getRandomNumber(cellTot);
          
          
        } while (bombsPosition.includes(bombPositionNumber)){
          
          bombsPosition.push(bombPositionNumber);
          console.log(bombsPosition)

       }

      }

      //  Creo le costanti per il gameplay
       let score = 0;
       let gameOverMessagge = ''
       const maxScore = 33 
      //  cellTot - bombTotal
       // In base alla scelta della difficoltà genero il numero di celle e la loro struttura 
      for (let i = 1; i <= cellTot; i++) {
          const cell = createCell (i)

          cell.classList.add(mode)
        
         


        
          
          
           
          
          // Al click sulla cella salvo il numero interno e la evidenzio 
          cell.addEventListener('click', function(event){
            
            
            // Controllose la cella è già stata cliccata 
             if (event.target.classList.contains('clicked')) return;


            // Controllo se la casella corrisponde ad una bomba  
             if (bombsPosition.includes(parseInt(event.target.innerText))){
               
               event.target.classList.add('bomb')
               gameOverMessagge = `Hai perso, il tuo score è ${score}`
               

            } else {
              event.target.classList.add('clicked')
              score++
              gameOverMessagge = `Score:  ${score}`
            }
            
            if(score == maxScore) {
              gameOverMessagge = `Hai vinto, il tuo score è ${score}`
            }
              
              scorePlaceholder.innerText = gameOverMessagge
          })
          
           
            grid.appendChild(cell)

            
        }
      })
      
    
