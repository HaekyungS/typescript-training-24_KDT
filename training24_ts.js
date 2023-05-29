function diffFinder(targetArray, compareArray, originalArray) {
    // union type(합집합 타입)
    var duplicatedElement = null;
    var replaceElement = null;
    targetArray.forEach(function (element, index) {
        if (compareArray.includes(element) === true) {
            duplicatedElement = element;
            replaceElement = originalArray[index];
            targetArray[index] = replaceElement;
        }
    });
    return {
        duplicatedElement: duplicatedElement,
        replaceElement: replaceElement,
        targetArray: targetArray
    };
}
var pokemon = ["피카츄", "라이츄", "파이리", "꼬부기"];
var digimon = ["코로몬", "테일몬", "가브몬", "꼬부기"];
var digimonOriginalData = ["코로몬", "테일몬", "가브몬", "어니몬"];
console.log(diffFinder(digimon, pokemon, digimonOriginalData));
