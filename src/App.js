import React, { useState } from 'react';
import axios from 'axios';
import { TaskProvider } from './contexts/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import AdminPanel from './components/AdminPanel';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';


// const App = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [taskToEdit, setTaskToEdit] = useState(null);
//   // const [message, setMessage] = useState('');
//   const isAdmin = true; // Change based on your auth logic

  


//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/login', { username, password });
//       localStorage.setItem('token', response.data.token);
//       setMessage('Login successful!');
//     } catch (error) {
//       setMessage('Login failed. Please check your credentials.');
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/register', { username, password });
//       setMessage('Registration successful!');
//     } catch (error) {
//       setMessage('Registration failed. Please try again.');
//     }
//   };
//   const fetchProtectedData = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setMessage('No token found. Please log in.');
//       return;
//     }

//   // const fetchProtectedData = async () => {
//   //   const token = localStorage.getItem('token');
//   //   if (!token) {
//   //     setMessage('No token found. Please log in.');
//   //     return;
//   //   }

//   //   try {
//   //     const response = await axios.get('http://localhost:4000/protected', {
//   //       headers: { Authorization: `Bearer ${token}` }
//   //     });
//   //     setMessage(response.data);
//   //   } catch (error) {
//   //     setMessage('Failed to fetch protected data.');
//   //   }
//   // };


  

//     try {
//       const response = await axios.get('http://localhost:4000/protected', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setMessage(response.data);
//     } catch (error) {
//       setMessage('Failed to fetch protected data.');
//       const [taskToEdit, setTaskToEdit] = useState(null);
//   const isAdmin = true; 


//     }
//   };

//   return (
//     <div>
//       <h1>JWT Authentication Example</h1>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>

//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Register</button>


//       <button onClick={fetchProtectedData}>Fetch Protected Data</button>
//       {message && <p>{message}</p>}

//       {/* <TaskProvider>
//       <h2>Task Management App</h2>
//       <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
//       {isAdmin ? <AdminPanel /> : <TaskList setTaskToEdit={setTaskToEdit} />}
//     </TaskProvider> */}
// </form>
//       <TaskProvider>
//       <h1>Task Management App</h1>
//       <h2>Login</h2>
//       <LoginForm />
//       <h2>Register</h2>
//       <RegistrationForm />
//       <h2>Create Task</h2>
//       <TaskForm />
//     </TaskProvider>
// <TaskProvider>
//       <h1>Task Management App</h1>
//       <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
//       {isAdmin ? <AdminPanel /> : <TaskList />}
//       <button onClick={fetchProtectedData}>Fetch Protected Data</button>
//       {message && <p>{message}</p>}
//     </TaskProvider>
//     </div>
       
       
    
    
//   );


// };



// export default App;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { TaskProvider } from './contexts/TaskContext';
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';
// import AdminPanel from './components/AdminPanel';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);
  const isAdmin = true; // Change based on your auth logic

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/register', { username, password });
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  const fetchProtectedData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('No token found. Please log in.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:4000/protected', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Failed to fetch protected data.');
    }
  };

  return (
    <TaskProvider>
      <div>
        <h1>JWT Authentication Example</h1>
        
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>

        <button onClick={fetchProtectedData}>Fetch Protected Data</button>
        {message && <p>{message}</p>}

        <h2>Create Task</h2>
        <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
        {isAdmin ? <AdminPanel /> : <TaskList setTaskToEdit={setTaskToEdit} />}
      </div>
    </TaskProvider>
  );
};

export default App;
