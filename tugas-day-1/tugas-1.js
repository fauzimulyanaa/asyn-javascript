const method = "GET";
const url = "https://jsonplaceholder.typicode.com/posts";



// pake callback

// const getTodos = (method, url, callback) => {
// const ajax = new XMLHttpRequest();
// ajax.open(method, url);
// ajax.send();
//   ajax.onreadystatechange = () => {
//     if (ajax.status === 200) {
//       const result = JSON.parse(ajax.responseText);

//       callback(result);
//     } else {
//       const error = "Terjadi Error!!!";
//       console.log(error);
//     }
//   };
// };

// getTodos(method, url, (result) => {
//   result.map((item) => {
//     console.log(item.title);
//   });
// });

// pake promise

const getTodos = (method, url) => {
  const ajax = new XMLHttpRequest();
ajax.open(method, url);
ajax.send();
  return new Promise((resolve, reject) => {
    ajax.onreadystatechange = () => {
      if (ajax.status === 200) {
        const result = JSON.parse(ajax.responseText);
        resolve(result);
      } else {
        const error = "terjadi error bro....";
        reject(error);
      }
    };
  });
};

getTodos(method, url)
  .then((hasil) => {
    hasil.map((item) => {
      console.log(item.title);
    });
  })
  .catch((err) => {
    console.log(err);
  });
