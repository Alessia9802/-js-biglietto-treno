//chiedere all'utente il numero di chilometri che vuole percorrere

const km_viaggio = prompt("Quanti km vuoi percorrere?");
console.log(km_viaggio);

// chiedere l'età del passeggero.

const passenger_age = prompt("Quanti anni hai?");
console.log(passenger_age);

/*Calcolare il prezzo totale del viaggio:
 - Prezzo del biglietto vale 0.21€ al km 
 */

const prezzo = km_viaggio * 0.21;
console.log(prezzo);

// Applicare sconto del 20% ai minorenni

const età_minori = new Date(2021) - new Date(2003);
console.log(età_minori);

const sconto_min = (età_minori / 20) * 100;
console.log(sconto_min);

// Applicare sconto del 40% agli over 65 anni

const età_over = new Date(2021) - new Date(1956);
console.log(età_over);

const sconto_max = (età_over / 40) * 100;
console.log(sconto_max);

// Prezzo finale
if (passenger_age <= età_minori) {
  console.log(sconto_min);
} else if (passenger_age >= età_over) {
  console.log(sconto_max);
}

document.getElementById("Prezzo_finale").innerHTML =
  (prezzo + km_viaggio + passenger_age) / 100;
