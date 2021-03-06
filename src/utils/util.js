export const getSesion = () => {
  return localStorage.getItem("auth");
};

export const setSesion = (username) => {
  if (username) localStorage.setItem("auth", username);
};

export const removeSesion = () => {
  localStorage.removeItem("auth");
};

export const getBalance = () => {
  return parseFloat(localStorage.getItem("balance"));
};

export const saveBalance = (balance) => {
  if (balance) localStorage.setItem("balance", balance);
};

export const numberCompare = (value) => {
  const { first, second, third } = value;

  const converted = {
    first: parseInt(first),
    second: parseInt(second),
    third: parseInt(third),
  };
  if (first === "-") {
    return 0;
  }
  return compare(converted);
};

const compare = (value) => {
  const numbers = Object.values(value);
  let count = {};
  numbers.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  const greater = Object.values(count).reduce((accumulator, currentValue) => {
    if (accumulator < currentValue) {
      return currentValue;
    } else {
      return accumulator;
    }
  });
  return greater;
};

export const rand = () => {
  return Math.round(Math.random() * 8) + 1;
};
