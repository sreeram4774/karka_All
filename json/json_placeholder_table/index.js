fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    const products = data;

    const head = document.getElementById("head");
    const headerRow = document.createElement("tr");
    const headers = ["S.No","User ID", "ID", "Title", "Body"];
    for (let i = 0; i < headers.length; i++) {
      const th = document.createElement("th");
      th.textContent = headers[i];
      headerRow.appendChild(th);
    }
    head.appendChild(headerRow);

    const body = document.getElementById("body");
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const row = document.createElement("tr");
      const sno=document.createElement("td") 
      const data1 = document.createElement("td");
      const data2 = document.createElement("td");
      const data3 = document.createElement("td");
      const data4 = document.createElement("td");

      sno.textContent=i+1
      data1.textContent = product.userId;
      data2.textContent = product.id;
      data3.textContent = product.title;
      data4.textContent = product.body;

      row.appendChild(sno)
      row.appendChild(data1);
      row.appendChild(data2);
      row.appendChild(data3);
      row.appendChild(data4);

      body.appendChild(row);
    }
  });
