"use client";


// /app/login/page.jsx
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
