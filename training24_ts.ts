function diffFinder(targetArray:Array<string>, compareArray:Array<string>, originalArray:Array<string>){
  // union type(합집합 타입)
  // 유니온 타입을 활용하여 작성하면 여러 타입으로 작성가능한 유연성이 생긴다.
  let duplicatedElement:null|string = null;
  let replaceElement:null|string = null;

  targetArray.forEach((element:string, index:number) => {
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