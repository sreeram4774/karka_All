fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => {
    const tableBody = document.getElementById("tbody"); 
    for (let i = 0; i < data.length; i++) {
      if(i<=2){

    
      let row = document.createElement("tr");
      
      let serial= document.createElement("td");
      serial.innerHTML = i+1;

      let userIdCell = document.createElement("td");
      userIdCell.textContent = data[i].userId;

      let idCell = document.createElement("td");
      idCell.textContent = data[i].id;

      let titleCell = document.createElement("td");
      titleCell.textContent = data[i].title;

      let bodyCell = document.createElement("td");
      bodyCell.textContent = data[i].body;
      row.appendChild(serial)
      row.appendChild(userIdCell);
      row.appendChild(idCell);
      row.appendChild(titleCell);
      row.appendChild(bodyCell);

      tableBody.appendChild(row);
    }
  }

  })
  .catch(err => console.error("Error fetching data:", err));
