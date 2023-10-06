const pokemonApi = async () => {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon");
    let data = await response.json();
    const hasil = data.results;
    hasil.map((item) => {
      console.log(`Name : ${item.name}`);
      console.log(`Url : ${item.url}`);

      const image = item.url.split("/");
      const imageNumber = image[image.length - 2];
      const resultImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageNumber}.png`;

      console.log(`Image : ${resultImage}`);
      console.log("--------------------------");
    });
  } catch (error) {
    console.error("Error Nih :", error);
  }
};

pokemonApi();

// pake promise

// const method = "GET";
// const url = "https://pokeapi.co/api/v2/pokemon";

// const getTodos = (method, url) => {

// const ajax = new XMLHttpRequest();
// ajax.open(method, url);
// ajax.send();
//   return new Promise((resolve, reject) => {
//     ajax.onreadystatechange = () => {
//       if (ajax.readyState === 4) {
//         if (ajax.status === 200) {
//           const result = JSON.parse(ajax.responseText);
//           resolve(result.results);
//         } else {
//           const error = "Error fetching data";
//           reject(error);
//         }
//       }
//     };
//   });
// };

// getTodos(method, url)
//   .then((hasil) => {
//     hasil.map((item) => {
//       console.log(`Name : ${item.name}`);
//       console.log(`Url : ${item.url}`);

//       const image = item.url.split("");
//       const imageNumber = image[image.length - 2];
//       const resultImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageNumber}.png`;

//       console.log(`Image : ${resultImage}`);
//       console.log("--------------------------");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
