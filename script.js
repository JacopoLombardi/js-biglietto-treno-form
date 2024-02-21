
// dichiaro alcune variabile assegnandole a delle classi dell'HTML
const km = document.querySelector('.input_km');
const age = document.querySelector('.input_age');
const btn_1 = document.querySelector('.btn_1');

let prezzoFinale = '';


// richiesta Km ed età all'utente, dopo che è stato premuto il btn_1
btn_1.addEventListener('click', function(){
   console.log('Km--->', km.value, 'eta--->', age.value);


   // calcolo il prezzo del biglietto per i Km da percorrere
   const prezzoPerKm = 0.21;

   const prezzoParziale = km.value * prezzoPerKm;
   console.log('prezzoPerKm--->', prezzoParziale);
   
   
   // Casistiche di sconto Under e Over
   if (age.value < 18){
      const scontoUnder = (prezzoParziale * 20) / 100;
      prezzoFinale = prezzoParziale - scontoUnder;
   }
   else if (age.value >= 65){
      const scontoOver = (prezzoParziale * 40) / 100;
      prezzoFinale = prezzoParziale - scontoOver;
   }
   else{  // age compreso tra 18 e 65 anni 
      prezzoFinale = prezzoParziale;
   }
   
   console.log('prezzoFinale--->', prezzoFinale);

})




  






// // inserisco nell'HTML i valori scelti dall'utente: Km, età e il costo del biglitto parziale
// document.getElementById('output-kminseriti').innerHTML += `${km} Km`;
// document.getElementById('output-etainserita').innerHTML += `${age}`;
// document.getElementById('output-prezzoparziale').innerHTML += `${prezzoParziale.toFixed(2)}`;


// // inserisco nell'HTML il prezzoFinale
// document.getElementById('output-prezzofinale').innerHTML += `${prezzoFinale.toFixed(2)}`;