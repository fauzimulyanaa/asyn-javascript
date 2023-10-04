const randomIdNumber = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== "number") {
        reject("parameter harus number!!");
      } else {
        let result = "";

        for (let i = 0; i < number; i++) {
          const randomDigit = Math.floor(Math.random() * 10);
          result += randomDigit;
        }

        resolve(parseInt(result));
      }
    }, 5000);
  });
};
randomIdNumber(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
