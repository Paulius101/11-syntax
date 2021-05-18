function raideVidurine(string)
{
    const vidurine = Math.floor(string.length/2);
    if (string.length % 2 == 0)
        return string[vidurine-1]
    else
        return string[vidurine];
}

export { raideVidurine };