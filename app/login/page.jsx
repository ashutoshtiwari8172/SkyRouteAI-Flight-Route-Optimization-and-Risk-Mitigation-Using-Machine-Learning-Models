// "use client";


// import { useState } from 'react';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await signIn('credentials', {
//       redirect: false,
//       email,
//       password,
//     });

//     if (result.ok) {
//       const res = await fetch('/api/auth/session');
//       const session = await res.json();
      
//       if (session.user.role === 'admin') {
//         router.push('/CreateUser');
//       } else if (session.user.role === 'airline') {
//         router.push('/AirlineDashboard');
//       } else if (session.user.role === 'pilot') {
//         router.push('/PilotDashboard');
//       } else {
//         router.push('/');
//       }
//     } else {
//       alert('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
//             <input
//               type="text"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-black rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300 ease-in-out"
//           >Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
"use client";
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.ok) {
      const res = await fetch('/api/auth/session');
      const session = await res.json();
      
      if (session.user.role === 'admin') {
        router.push('/CreateUser');
      } else if (session.user.role === 'airline') {
        router.push('/AirlineDashboard');
      } else if (session.user.role === 'pilot') {
        router.push('/PilotDashboard');
      } else {
        router.push('/');
      }
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="form-container flex items-center justify-center min-h-screen bg-[#0e100f]" 
      style={{
        backgroundColor: '#131313'  // Dark grey background for the container
      }}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-2xl shadow-2xl w-full max-w-md"
        style={{
          background: '#131313', // Dark grey inside the form
          backdropFilter: 'blur(10px)', // Blur effect for the glass look
          borderColor: '#bdbdbd', // Light grey border color
          borderWidth: '2px', // Bold yet thin border width
          borderStyle: 'solid', // Solid border style
          color: 'white'  // White text color
        }}>
        <h1 className="text-lg font-bold mb-1" style={{ color: 'white' }}>Login</h1>
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(128, 128, 128, 0.3)', marginBottom: '16px' }}></div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ color: 'white', display: 'block', marginBottom: '10px' }}>Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: 'calc(100% - 32px)', borderColor: '#D3D3D3', borderWidth: '1px', transition: 'border-color 0.4s ease-in-out, border-width 0.4s ease-in-out', padding: '8px', borderRadius: '9999px', backgroundColor: 'transparent', color: 'white' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password" style={{ color: 'white', display: 'block', marginBottom: '10px' }}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: 'calc(100% - 32px)', borderColor: '#D3D3D3', borderWidth: '1px', transition: 'border-color 0.4s ease-in-out, border-width 0.4s ease-in-out', padding: '8px', borderRadius: '9999px', backgroundColor: 'transparent', color: 'white' }}
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full cursor-pointer" 
          style={{borderColor: 'white', borderRadius: '9999px' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
