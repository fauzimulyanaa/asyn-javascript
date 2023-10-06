const project = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    data.map((item) => {
      console.log(item.title);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

project();
