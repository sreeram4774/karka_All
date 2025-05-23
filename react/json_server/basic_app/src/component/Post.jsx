import React, { useState,} from 'react';
import axios from 'axios';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(1);

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3002/user')
  //     .then(response => setUsers(response.data))
  //     .catch(error => console.error("Error fetching users:", error));
  //     console.log()
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id:id,
      name: name,
      email: email
    };

    axios.post('http://localhost:3002/user', newUser)
      .then(response => {
        // setUsers([response.data]);
        setId(prevId=>prevId+1)
        setName('');
        setEmail('');
        console.log(response.data) 
      })
      .catch(error => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddUser = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [users, setUsers] = useState([]);

//   const fetchUsers = () => {
//     axios.get('http://localhost:3005/user')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching users:", error);
//       });
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newUser = {
//       name: name,
//       email: email
//     };

//     axios.post('http://localhost:3005/user', newUser)
//       .then(response => {
//         console.log("User added:", response.data);
//         setName('');
//         setEmail('');
//         fetchUsers(); 
//       })
//       .catch(error => {
//         console.error("Error adding user:", error);
//       });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           value={name}
//           onChange={(e) => setName(e.target.value)} 
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} 
//         />
//         <button type="submit">Add User</button>
//       </form>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>S.no</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={user.id}>
//               <td>{index + 1}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default AddUser;
