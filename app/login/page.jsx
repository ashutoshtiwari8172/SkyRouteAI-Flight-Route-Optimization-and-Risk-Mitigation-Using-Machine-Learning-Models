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
//     <div className="form-container flex items-center justify-center min-h-screen bg-[#0e100f]">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-2xl shadow-2xl w-full max-w-md"
//         style={{
//           background: 'rgba(235, 236, 238, 0.8)', // Translucent #Ebecee
//           backdropFilter: 'blur(10px)', // Blur effect for the glass look
//           borderColor: '#092368', // Deep navy blue border color
//           borderWidth: '2px', // Bold yet thin border width
//           borderStyle: 'solid', // Solid border style
//           color: '#092368'  // Deep navy blue text color
//         }}>
//         <h1 className="text-lg font-bold mb-1" style={{ color: '#092368' }}>Login</h1>
//         <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(128, 128, 128, 0.3)', marginBottom: '16px' }}></div>
//         <div style={{ marginBottom: '10px' }}>
//           <label htmlFor="email" style={{ color: '#092368', display: 'block', marginBottom: '10px' }}>Email</label>
//           <input
//             id="email"
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: 'calc(100% - 32px)', borderColor: '#D3D3D3', borderWidth: '1px', transition: 'border-color 0.4s ease-in-out, border-width 0.4s ease-in-out', padding: '8px', borderRadius: '9999px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label htmlFor="password" style={{ color: '#092368', display: 'block', marginBottom: '10px' }}>Password</label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: 'calc(100% - 32px)', borderColor: '#D3D3D3', borderWidth: '1px', transition: 'border-color 0.4s ease-in-out, border-width 0.4s ease-in-out', padding: '8px', borderRadius: '9999px' }}
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full cursor-pointer" style={{ background: '#092368', borderRadius: '9999px' }}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

//original form
// "use client";


// // /app/login/page.jsx
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
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
