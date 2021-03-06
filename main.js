// tady je místo pro náš program

document.querySelector('#vysledek').innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 * 
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
	alert('Gratulace, právě si spustila tuto funkci!');
}

/**
 * Upraví barvu pozadí předaného prvku
 * 
 * @param {string} elementSelector 
 */
function upravBarvu(elementSelector) {
	document.querySelector(elementSelector).style.backgroundColor = 'green';
}