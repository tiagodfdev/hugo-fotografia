async function getArrayRandom(min:number, max:number, length:number){
    function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let arrayRandom = []
  while(arrayRandom.length<length){
    var value = getRandomIntInclusive(min,max)
    if (!arrayRandom.includes(value)){
      arrayRandom.push(value)
    }
  }
  return arrayRandom
}
export default getArrayRandom