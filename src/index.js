const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Buenos Aires', 'Madrid'];

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    } else {
      resolve(str.split('').reverse().join(''));
    }
  });
};

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

module.exports = randomString;
