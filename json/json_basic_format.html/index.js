    fetch('./index.json').then(res => res.json()).then(data => {    
        const product = data.product.name;
        const person=data.history.age
        console.log(data.product.name`${name[0]}`)
        console.log(person)


        document.getElementById('name').innerText= `Name: ${product.name}`;
        document.getElementById('age').textContent = `Age: ${product.age}`;
        document.getElementById('clg').textContent = `College: ${product.clg}`;
    })
.catch(err => console.error('Error fetching the JSON coma:', err));



// fetch('./index.json').then(res => res.json()).then(data => {    
//     const product = data;
//     console.log(product)
//     document.getElementById('name').innerText= `Name: ${product.name}`;
//     document.getElementById('age').textContent = `Age: ${product.age >20 ?"Eligible":"Not Elegible"}`;
//     document.getElementById('clg').textContent = `College: ${product.clg}`;
// })
// .catch(err => console.error('Error fetching the JSON coma:', err));



