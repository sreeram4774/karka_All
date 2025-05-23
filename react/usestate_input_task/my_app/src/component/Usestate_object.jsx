// import React, { useState } from 'react';

// const UserForm = () => {
//   const [user, setUser] = useState({
//     name: '',
//     age: ''
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value
//     });
    
//   };

//   const handleSubmit = () => {
//     setSubmittedData(user);
//   };

//   return (
//     <div>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={user.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Age:</label>
//         <input
//           type="number"
//           name="age"
//           value={user.age}
//           onChange={handleChange}
//         />
//       </div>
//       <button onClick={handleSubmit}>Submit</button>

//       {submittedData && (
//         <div>
//           <h3>Submitted User Data:</h3>
//           <p>Name: {submittedData.name}</p>
//           <p>Age: {submittedData.age}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserForm;



import React, { useState } from 'react';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', age: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (user.name && user.age) {
      setSubmittedData(user);
      setUser({name:"",age:""})
      
    } else {
      alert('Please enter both Name and Age');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>User Form</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}/>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
