"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PilotForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const res = await fetch("/api/Pilots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData })
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div className="form-container flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-2xl shadow-2xl w-full max-w-md"
        style={{
          background: 'rgba(235, 236, 238, 0.8)', // Translucent #Ebecee
          backdropFilter: 'blur(10px)', // Blur effect for the glass look
          borderColor: '#092368', // Deep navy blue border color
          borderWidth: '2px', // Bold yet thin border width
          borderStyle: 'solid', // Solid border style
          color: '#092368'  // Deep navy blue text color
        }}>
        <h1 className="text-lg font-bold mb-1" style={{ color: '#092368' }}>Create New Pilot</h1>
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(128, 128, 128, 0.3)', marginBottom: '16px' }}></div>
        {['name', 'email', 'password', 'airline', 'role'].map(field => (
          <div key={field} className="input-wrapper" style={{ marginBottom: '10px'  }}>
            <label htmlFor={field} className="font-medium" style={{ color: '#092368',display: 'block', marginBottom: '10px' }}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              id={field}
              name={field}
              type={field === 'password' ? 'password' : 'text'}
              onChange={handleChange}
              required
              placeholder={`Enter ${field}`}
              className="input bg-transparent rounded-full py-2 px-4 border"
              style={{ borderColor: '#D3D3D3', borderWidth: '1px', transition: 'border-color 0.4s ease-in-out, border-width 0.4s ease-in-out', width: 'calc(100% - 32px)' }}
              onFocus={(e) => { e.target.style.borderColor = '#092368'; e.target.style.borderWidth = '2px'; }}
              onBlur={(e) => { e.target.style.borderColor = '#D3D3D3'; e.target.style.borderWidth = '1px'; }}
            />
          </div>
        ))}
        <input
          type="submit"
          value="Create Pilot"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
          style={{ background: '#092368' }}
        />
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </div>
  );
};

export default PilotForm;

