parasyti funkcija:
- duoto zodzio pirma raide
- duoto zodzio vidurine raide
- duoto zodzio paskutine raide
- ar duoto zodzio N-oji raide yra didzioji? true/false
- ar duoto zodzio N-oji raide yra mazoji? true/false

function raidePirma(string) {
const pirma = string[0];
return pirma;
}    

const raidePirma = string => string[0];

const dalyba = (a, b) => a / b;


const raideVidurine = string => 
{
    const vidurine = Math.floor(string.length/2);
    if (string.length % 2 == 0)
        return string[vidurine-1]
    else
        return string[vidurine];
}


const raidePaskutine = string => string[string.length-1];


1. iprasta funkcija
2. konstantai priskirta anonimine funkcija
3. rodykline funkcija
4. jei logikoje tik viena operacija, galim istrinti {} ir return
5. jei gaunam tik viena parametra, galim istrinti ()

