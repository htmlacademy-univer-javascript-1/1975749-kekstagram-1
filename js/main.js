function getRandomNumber(min,max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomNumber(3529,7564));


function getCorrectString(strLenght, maxLenght) {
    if (strLenght.length > maxLenght.length) {
      console.log(false);
    } else {
      console.log(true);
    }

}
getCorrectString('петяяяя','ваzzячя')
