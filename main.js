// tady je místo pro náš program

document.querySelector("#vysledek").innerHTML = secti(7, 3);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * 
 */
function zobrazVysledek(selector, a, b) {
  document.querySelector(selector).innerHTML = secti(a, b);
}
/*
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}



/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log('Gratulace, právě si spustila tuto funkci!');


  let squareElement = document.getElementsByClassName('ctverecek')[0]
  squareElement.innerHTML = 'Gratulace, právě si spustila tuto funkci!';
  squareElement.style.width = '350px';
  squareElement.style.backgroundColor = 'pink';

}



function zmenaBarvy() {
  document.querySelector('.ctverecek').style.backgroundColor = 'green';
}
