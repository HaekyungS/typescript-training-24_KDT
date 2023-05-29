function diffFinder(targetArray, compareArray, originalArray){
  let duplicatedElement = null;
  let replaceElement = null;

  targetArray.forEach((element, index) => {
    if(compareArray.includes(element)===true){
      duplicatedElement = element
      replaceElement = originalArray[index]
      targetArray[index] = replaceElement
    }
  });

  return {
    duplicatedElement:duplicatedElement,
    replaceElement:replaceElement,
    targetArray : targetArray
  }
}

const pokemon = ["피카츄","라이츄","파이리","꼬부기"]
const digimon = ["코로몬","테일몬","가브몬","꼬부기"]
const digimonOriginalData = ["코로몬","테일몬","가브몬","어니몬"]

console.log(diffFinder(digimon,pokemon,digimonOriginalData))