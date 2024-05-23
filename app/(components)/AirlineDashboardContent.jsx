'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DashboardContent = ({ session }) => {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Airborne');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/flightData');
        const data = await response.json();
        setFlightData(data);
        setFilteredData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching flight data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const results = flightData.filter(flight =>
      flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, flightData]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Flight Number"
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>
      {activeTab === 'Airborne' && (
        <div>
          <h1 className="text-xl font-semibold mb-4">Airborne Flights</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map((flight) => (
              <Link href={`/flight/${flight._id}`} key={flight._id.$oid}>
                <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100">
                  <h2 className="text-lg font-bold mb-2">Flight Number: {flight.flightNumber}</h2>
                  <p><strong>Airline:</strong> {flight.airlineName}</p>
                  <p><strong>Aircraft Type:</strong> {flight.aircraftType}</p>
                  <p><strong>Departure Time:</strong> {new Date(flight.departureTime).toLocaleString()}</p>
                  <p><strong>Arrival Time:</strong> {new Date(flight.arrivalTime).toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
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
