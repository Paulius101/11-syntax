import { raidePirma } from './pirmaRaide.js';
import { raideVidurine } from './vidurineRaide.js';
import { raidePaskutine } from './paskutineRaide.js';


const vientisasTekstas = array => {
    let answer = '';
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    answer += raidePirma(element);
    answer += raideVidurine(element);
    answer += raidePaskutine(element)
}
return answer
}


console.log(vientisasTekstas(['labas', 'rytas']), '->', 'lbsrts')
console.log(vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']), '->', 'maonmsyragts')
console.log(vientisasTekstas(['as', 'i', 'ten']), '->', 'aasiiiten')