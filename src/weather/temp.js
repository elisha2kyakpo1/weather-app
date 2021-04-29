const convertTemps = () => {
  let temps = tempsElem.map(
    (temp) => temp.innerText.match(/-?[\d\.]+(?=[°])/)[0]
  );
  tempsElem.forEach((tempElem, index) => {
    let convertedTemp = convertTemp(temps[index]);
    tempElem.innerText = `${Math.round(convertedTemp * 10) / 10}°`;
  });
  currentUnit = currentUnit === 0 ? 1 : 0;
};

const tempConterter = (temp) => {
  if (currentUnit === 0) {
    return 1.8 * Number(temp) + 32;
  } else (currentUnit === 1) {
    return (5 / 9) * (Number(temp) - 32);
  }
};