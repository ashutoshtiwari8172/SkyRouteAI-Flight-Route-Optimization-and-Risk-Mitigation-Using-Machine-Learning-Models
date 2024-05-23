'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const FlightDetails = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routeScores, setRouteScores] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchFlight = async () => {
        try {
          const response = await fetch(`/api/flightData?id=${id}`);
          const data = await response.json();
          setFlight(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching flight data:', error);
          setLoading(false);
        }
      };

      fetchFlight();
    }
  }, [id]);

  const fetchRouteScores = async (route) => {
    console.log('Sending route data:', route);
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ route }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching route scores:', error);
      return null;
    }
  };

  useEffect(() => {
    if (flight) {
      const fetchAllRouteScores = async () => {
        const scores = await Promise.all(flight.routes.map(async (route) => {
          const transformedRoute = {
            airline: flight.airlineName,
            departure_airport: route.originAirport,
            arrival_airport: route.destinationAirport,
            route_via: "RouteX", // Replace with actual data if available
            weather: "Clear", // Replace with actual data if available
            visibility: route.weatherConditions.visibility,
            turbulence_intensity: route.weatherConditions.turbulenceIntensity,
            wind_shear: route.weatherConditions.windShear,
            air_traffic_density: route.weatherConditions.airTrafficDensity,
            precipitation: route.weatherConditions.precipitation,
            pilot_experience: route.weatherConditions.pilotExperience,
            forecast_accuracy: route.weatherConditions.weatherForecastAccuracy,
            maintenance_history: "Good", // Replace with actual data if available
            fuel_consumption: route.flightConditions.fuelConsumption,
            air_traffic_congestion: route.flightConditions.airTrafficCongestion,
            no_step_climbs: route.flightConditions.noStepClimbs,
            aircraft_load_factor: route.flightConditions.aircraftLoadFactor,
            projected_flight_time: route.flightConditions.projectedFlightTime,
            maintenance_status: route.flightConditions.maintenanceStatus,
          };
          return await fetchRouteScores(transformedRoute);
        }));
        setRouteScores(scores);
      };
      fetchAllRouteScores();
    }
  }, [flight]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!flight) {
    return <div>Flight not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Flight Details for {flight.flightNumber}</h1>
      <p><strong>Airline:</strong> {flight.airlineName}</p>
      <p><strong>Aircraft Type:</strong> {flight.aircraftType}</p>
      <p><strong>Departure Time:</strong> {new Date(flight.departureTime).toLocaleString()}</p>
      <p><strong>Arrival Time:</strong> {new Date(flight.arrivalTime).toLocaleString()}</p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Routes</h2>
      {flight.routes.map((route, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <p><strong>Origin Airport:</strong> {route.originAirport}</p>
          <p><strong>Destination Airport:</strong> {route.destinationAirport}</p>
          <h3 className="font-semibold mt-2">Weather Conditions</h3>
          <p>Visibility: {route.weatherConditions.visibility}</p>
          <p>Turbulence Intensity: {route.weatherConditions.turbulenceIntensity}</p>
          <p>Wind Shear: {route.weatherConditions.windShear}</p>
          <p>Air Traffic Density: {route.weatherConditions.airTrafficDensity}</p>
          <p>Precipitation: {route.weatherConditions.precipitation}</p>
          <p>Pilot Experience: {route.weatherConditions.pilotExperience}</p>
          <p>Weather Forecast Accuracy: {route.weatherConditions.weatherForecastAccuracy}</p>
          <p>Maintenance History and Health Metrics: {route.weatherConditions.maintenanceHistoryAndHealthMetrics}</p>
          <h3 className="font-semibold mt-2">Flight Conditions</h3>
          <p>Fuel Consumption: {route.flightConditions.fuelConsumption}</p>
          <p>Air Traffic Congestion: {route.flightConditions.airTrafficCongestion}</p>
          <p>No Step Climbs: {route.flightConditions.noStepClimbs}</p>
          <p>Aircraft Load Factor: {route.flightConditions.aircraftLoadFactor}</p>
          <p>Projected Flight Time: {route.flightConditions.projectedFlightTime}</p>
          <p>Maintenance Status: {route.flightConditions.maintenanceStatus}</p>
          {routeScores[index] && (
            <div>
              <h4 className="font-semibold mt-2">Scores</h4>
              <p>Safety Score: {routeScores[index].safety_score}</p>
              <p>Efficiency Score: {routeScores[index].efficiency_score}</p>
              <p>Combined Score: {routeScores[index].combined_score}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightDetails;
