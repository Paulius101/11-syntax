/**
 * 
 * @param {string} text Tekstas
 * @param {number} position Simbolio pozicija, pradedam nuo 1 (zmoniu kalba)
 * @returns 
 */
function arDidziojiRaide(text, position) {
    const letter = text[position - 1];                  // g

    return letter === letter.toUpperCase();             // g === G -> false
}

export { arDidziojiRaide }