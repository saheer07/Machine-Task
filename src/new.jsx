// import React, { useState } from "react";
// import './App.css';

// function App() {
//   const [inputNumber, setInputNumber] = useState("");
//   const [submitNumbers, setSubmitNumbers] = useState([]); 

 

//   return (
//     <>
//       <div className="Number">
//         <input
//           type="number"
//           value={inputNumber}
//           onChange={(e) => setInputNumber(e.target.value)}
//         />
//   <button 
//   onClick={() => {
//     if (inputNumber.trim() !== "") {
//       setSubmitNumbers([...submitNumbers, inputNumber]); 
//       setInputNumber(""); 
//     }
//   }}
// >
//   Submit
// </button>

// </div>

//        <div>
//        {submitNumbers.map((num, index) => {
//   const number = parseInt(num); 
//   const className = number % 2 === 0 ? "even" : "odd";

//   return (
//     <p key={index} className={className}>
//       {num}
//     </p>
//   );
// })}
//         </div>
   
//     </>
//   );
// }

// export default App;

// import React from 'react'
// import { useState } from 'react'

// function App() {

//   const  [ischenge, setIschenge] = useState(false);
//   return (

//     <div   
//     style={{
//       background: ischenge ? "red" : "blue", 
//       color: "black",
//       height:"100vh",
//       display:"flex",
//       justifyContent:"center",
//       alignItems:"center"
//     }}
//     >
//       <button onClick={()=>setIschenge(!ischenge)}>
// {ischenge ? "Switch to blue Theme":"Switch to red Theme"}
//       </button>
//     </div>
//   )
// }

// export default App




// import React from "react";
// import { Container } from "react-bootstrap";
// import States from "./States";
// import "./App.css";


// function App() {


//   const states = [
//     {
//       name: "Kerala",
//       Language: "Malayalam",
//       Population: "35 million",
//       image: "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&w=0&k=20&c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg="
//     },
//     {
//       name: "Tamilnadu",
//       Language: "Tamil",
//       Population: "72.14 million",
//       image: "https://media.istockphoto.com/id/1175506409/photo/small-village-amidst-terrace-farms-on-hills-of-kodaikanal-tamil-nadu.jpg?s=612x612&w=0&k=20&c=E_SZ5ejTB3kuHej2RMX6HAWq26V3n0Jyfx4nSxs5rUY="
//     },
//     {
//       name: "karnataka",
//       Language: "Kannada",
//       Population: "67.515 million",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Karnataka_Logo.png/600px-Karnataka_Logo.png"
//     },
//     {
//       name: "Andhra Pradesh",
//       Language: "Telugu",
//       Population: "53.079 million",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Andhra_Pradesh_Logo.png/600px-Andhra_Pradesh_Logo.png"
//     },
//     {
//       name: "Telangana",
//       Language: "Telugu",
//       Population: "38.18 million",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Telangana_Logo.png/600px-Telangana_Logo.png"
//     },
//     {
//       name: "Goa",
//       Language: "Konkani and Marathi",
//       Population: "1.5 million",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Goa_Logo.png/600px-Goa_Logo.png"
//     },
//     {
//       name: "Maharashtra",
//       Language: "Marathi",
//       Population: "126.385 million",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Maharashtra_Logo.png/600px-Maharashtra_Logo.png"
//     },
//     {
//       name: "chhattisgarh",
//       Language: "Hindi",
//       Population: "30 million",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chhattisgarh_Logo.png/600px-Chhattisgarh_Logo.png"
//     }
//   ];
  
//   return (
//     <div className="App">
//     <Container>
//  <States states={states } />
//     </Container>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [input, setInput] = useState('');
//   const [numbers, setNumbers] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleSubmit = () => {
//     if (input.trim() === '') return;

//     if (editIndex !== null) {
//       const updatedNumbers = [...numbers];
//       updatedNumbers[editIndex] = input;
//       setNumbers(updatedNumbers);
//       setEditIndex(null);
//     } else {
//       setNumbers([...numbers, input]);
//     }
//     setInput('');
//   };

//   const handleEdit = (index) => {
//     setInput(numbers[index]);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updatedNumbers = numbers.filter((_, i) => i !== index);
//     setNumbers(updatedNumbers);
//     if (editIndex === index) {
//       setInput('');
//       setEditIndex(null);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Number List Manager</h2>
//       <div className="input-box">
//         <input
//           type="text"
//           placeholder="Enter number"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={handleSubmit}>
//           {editIndex !== null ? 'Update' : 'Add'}
//         </button>
//       </div>

//       <div className="number-list">
//         {numbers.map((num, index) => (
//           <div key={index} className="number-item">
//             <span>{num}</span>
//             <div className="actions">
//               <button onClick={() => handleEdit(index)} className="edit">Edit</button>
//               <button onClick={() => handleDelete(index)} className="delete">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;









// import React, { useState } from "react";
// import './App.css';

// const App = () => {
//   const [inputvalue, setInputvalue] = useState("")
//   const [submitevalue, setSubmitevalue]= useState("")

//   return(
//     <div>

//     <div  className="mb-3 d-flex">
//       <input
//       className="form-control me-2"
//        type="text"
//       placeholder="Type here..."
//       onChange={(e)=>setInputvalue(e.target.value)}
//       />
//       <button onClick={()=>setSubmitevalue(inputvalue)} className="btn btn-primary">Submit</button>
//     </div>

// <div className="list-group mb-3 d-flex" >
//  { submitevalue && (
//  <>
//   <h5 className="list-group-item d-flex justify-content-between align-items-center">{submitevalue}</h5>
//   <button onClick={()=>setSubmitevalue("")} className="btn btn-danger btn-sm">Delete</button>
  
//   </>
//   )}
// </div>
  
//     </div>
//   )
// }

// export default App;





// import { useState } from "react";
// import './App.css';



// function App () {
//   const [inputvalue, setInputvalue] = useState("");
//   const [submitevalue, setSubmitevalue] = useState([])


  
//   const handleSubmit = () => {
//     if (inputvalue.trim() === "") return;
//     setSubmitevalue([...submitevalue, inputvalue]);
//     setInputvalue(""); 
//   };

//   const handleDelete = (index) => {
//     const UpdetedValue = submitevalue.filter((_,i)=> i !== index );
//     setSubmitevalue(UpdetedValue);

//   }

//   return (
//     <>
//     <div className="main-conteiner">
//       <input 
//       type="text" 
//       placeholder="Type here..."
//       value={inputvalue}
//       onChange={(e)=>setInputvalue(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>

//    <div>
//      {submitevalue.map((value,index)=>(
//   <div key={index}>
//   <h6>{value}</h6>
//   <button onClick={()=>handleDelete(index)}>Delete</button>
//      </div>
//      ))}
//     </div>

// </> 
//   )
// }


// export default App;




// import React, { useState } from 'react'

// function App() {

//   const [task, setTask] = useState("")
//   const [addtask, setAddtask]= useState([]);

//   const handleadd = () => {
//     if(task.trim() === "") return;
//     setAddtask([...addtask, task]);
//     setTask("")
//   }

//   const handleDelete = (index) => {
//     const UpdateTask = addtask.filter((_,i)=> i !== index ) 
//   setAddtask(UpdateTask);
//   }


//   return (
//     <>
//     <div>
//       <input
//        type="text"
//     placeholder="Type here...."
//     value={task}
//     onChange={(e)=> setTask(e.target.value)}
//        />
//        <button onClick={handleadd}>Add Task</button>
//     </div>

//     <div key={index}>
//       {addtask.map((value,index) =>(
//         <>
//         <h8>{value}</h8>
//         <button onClick={()=> handleDelete(index)}>Delete</button>
//         </>
//       )
    
//     )}
//     </div>

// </>
//   )
// }

// export default App


// import React, { useState } from "react";
// import './App.css';

// function App() {
//   const [inputNumber, setInputNumber] = useState("");
//   const [submitNumbers, setSubmitNumbers] = useState([]); 

 

//   return (
//     <>
//       <div className="Number">
//         <input
//           type="number"
//           value={inputNumber}
//           onChange={(e) => setInputNumber(e.target.value)}
//         />
//   <button 
//   onClick={() => {
//     if (inputNumber.trim() !== "") {
//       setSubmitNumbers([...submitNumbers, inputNumber]); 
//       setInputNumber(""); 
//     }
//   }}
// >
//   Submit
// </button>

// </div>

//        <div>
//        {submitNumbers.map((num, index) => {
//   const number = parseInt(num); 
//   const className = number % 2 === 0 ? "even" : "odd";

//   return (
//     <p key={index} className={className}>
//       {num}
//     </p>
//   );
// })}
//         </div>
   
//     </>
//   );
// }

// export default App;
