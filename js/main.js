function getRandomInt(min, max) {
  if (min > max || min < 0 || max < 0) {
  throw "Некорректные аргументы. Введите подходящее число: "
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function checkStringLenght(checkString, maxLenght) {
  return (checkString.length > maxLenght) ? true : false;
  }

  console.log(getRandomInt(5, 23))
  console.log(checkStringLenght('235352', '23'))


