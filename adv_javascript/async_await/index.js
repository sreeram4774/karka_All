async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json(); 
        console.log(data);
    } catch (e) {
        console.error("Error:", e);
    }
}

fetchData();


// async function getData() {
//     console.log("1. Start");
  
//     const result = await new Promise((resolve) => {
//         resolve("2. Data fetched");
//     });
  
//     console.log(result); 
//     console.log("3. End");
//   }
  
//   getData();