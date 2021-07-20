import getKeysFromBucket from './getKeysFromBucket';
import getArrayRandom from './getArrayRandom';

async function getRandomKeys(){
  const getAllKeys = await getKeysFromBucket('photography-web')
  // put off folder name key
  const filteredKeys = getAllKeys.filter((current)=>{
    return (current.indexOf('/')+1!==current.length)
  })
  const randomArray = await getArrayRandom(0,filteredKeys.length-1,14)
  const keysOfRandom = randomArray.map((current)=>{
    return filteredKeys[current]
 })
 return keysOfRandom
}
export default getRandomKeys