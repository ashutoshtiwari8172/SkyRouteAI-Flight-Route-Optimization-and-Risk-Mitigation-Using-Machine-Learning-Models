'use client';

import React, { useState } from 'react';

const DashboardContent = ({ session }) => {
  const [activeTab, setActiveTab] = useState('Airborne');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Airline Dashboard</h1>
      <div className="tabs mb-4">
        <button
          onClick={() => handleTabClick('Airborne')}
          className={`px-4 py-2 ${activeTab === 'Airborne' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Airborne
        </button>
        <button
          onClick={() => handleTabClick('Upcoming')}
          className={`px-4 py-2 ${activeTab === 'Upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Upcoming
        </button>
        <button
          onClick={() => handleTabClick('Past')}
          className={`px-4 py-2 ${activeTab === 'Past' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Past
        </button>
      </div>
      {activeTab === 'Airborne' && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Airborne</h2>
          <ul>
            <li>Flight 101 - Destination: XYZ</li>
            <li>Flight 202 - Destination: ABC</li>
            {/* Add more airborne flights here */}
          </ul>
        </div>
      )}
      {activeTab === 'Upcoming' && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Upcoming</h2>
          <ul>
            <li>Flight 303 - Departure: 12:00 PM</li>
            <li>Flight 404 - Departure: 2:00 PM</li>
            {/* Add more upcoming flights here */}
          </ul>
        </div>
      )}
      {activeTab === 'Past' && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Past</h2>
          <ul>
            <li>Flight 505 - Arrived: 9:00 AM</li>
            <li>Flight 606 - Arrived: 10:30 AM</li>
            {/* Add more past flights here */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
