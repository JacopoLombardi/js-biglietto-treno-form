
// dichiaro alcune variabile assegnandole a delle classi dell'HTML
const firstnameLastname = document.querySelector('.input_firstname_lastname');
const km = document.querySelector('.input_km');
const age = document.querySelector('.input_age');
const btn_1 = document.querySelector('.btn_1');
const btn_2 = document.querySelector('.btn_2');

let prezzoFinale = '';


// richiesta Km ed età all'utente, dopo che è stato premuto il btn_1
btn_1.addEventListener('click', function(){
   console.log('Km--->', km.value, 'eta--->', age.value);


   // leggiamo e poi scriviamo il Nome e Cognome sul ticket
   console.log('Nome--->', firstnameLastname.value);
   document.querySelector('.out_name').innerHTML = `${firstnameLastname.value}`;


   // calcolo il prezzo del biglietto per i Km da percorrere
   const prezzoPerKm = 0.21;
   const prezzoParziale = km.value * prezzoPerKm;
   console.log('prezzoPerKm--->', prezzoParziale);
   
   
   // Casistiche di sconto Under e Over
   if (age.value < 18){
      const scontoUnder = (prezzoParziale * 20) / 100;
      prezzoFinale = prezzoParziale - scontoUnder;
      document.querySelector('.out_offer').innerHTML = 'Offerta Junior';
   }
   else if (age.value >= 65){
      const scontoOver = (prezzoParziale * 40) / 100;
      prezzoFinale = prezzoParziale - scontoOver;
      document.querySelector('.out_offer').innerHTML = 'Offerta Senior';
   }
   else{  // age compreso tra 18 e 65 anni 
      prezzoFinale = prezzoParziale;
      document.querySelector('.out_offer').innerHTML = 'Offerta Standard';
   }
   // scrivo il prezzo finale sul ticket
   console.log('prezzoFinale--->', prezzoFinale);
   document.querySelector('.out_priceticket').innerHTML = `&euro;${prezzoFinale.toFixed(2)}`;


   // numero carrozza - da 1 a 10
   const nCarrozza = Math.ceil(Math.random () * 12);
   document.querySelector('.out_carrozza').innerHTML =`${nCarrozza}`;


   // Codice CP - da 10.000 a 90.000
   const nCp = Math.floor(Math.random() * (90000 - 10000 + 1)) + 10000;
   document.querySelector('.out_cpcode').innerHTML =`${nCp}`;
})


// se viene premuto btn_2 si resettano i valori
btn_2.addEventListener('click', function(){
   document.querySelector('.input_firstname_lastname').value = '';
   document.querySelector('.input_km').value = '';
   document.querySelector('.input_age').value = '';
})
