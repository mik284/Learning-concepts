var globalNumber = 5;

function globalIncrementer() {
  const localNumber = 10;

  globalNumber += 1;
  return globalNumber;
}
