// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';

// const FlightDetails = () => {
//   const { id } = useParams();
//   const [flight, setFlight] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [routeScores, setRouteScores] = useState([]);
//   const [sortedRoutes, setSortedRoutes] = useState([]);

//   useEffect(() => {
//     const fetchFlight = async () => {
//       try {
//         const response = await fetch(`/api/flightData?id=${id}`);
//         const data = await response.json();
//         setFlight(data);
//       } catch (error) {
//         console.error('Error fetching flight data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchFlight();
//     }
//   }, [id]);

//   const fetchRouteScores = async (route) => {
//     try {
//       // const response = await fetch('https://flaskapp.qualicio.io/predict', {
//         const response = await fetch('http://localhost:5000/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ route }),
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching route scores:', error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const fetchAllRouteScores = async () => {
//       if (flight && routeScores.length === 0) {
//         try {
//           const scores = await Promise.all(
//             flight.routes.map(async (route) => {
//               const transformedRoute = {
//                 weather: route.weatherConditions.weather,
//                 visibility: route.weatherConditions.visibility,
//                 turbulence_intensity: route.weatherConditions.turbulenceIntensity,
//                 wind_shear: route.weatherConditions.windShear,
//                 air_traffic_density: route.weatherConditions.airTrafficDensity,
//                 precipitation: route.weatherConditions.precipitation,
//                 pilot_experience: route.weatherConditions.pilotExperience,
//                 forecast_accuracy: route.weatherConditions.weatherForecastAccuracy,
//                 maintenance_history: route.weatherConditions.maintenanceHistoryAndHealthMetrics,
//                 fuel_consumption: route.flightEfficiency.fuelConsumption,
//                 air_traffic_congestion: route.flightEfficiency.airTrafficCongestion,
//                 no_step_climbs: route.flightEfficiency.noStepClimbs,
//                 aircraft_load_factor: route.flightEfficiency.aircraftLoadFactor,
//                 projected_flight_time: route.flightEfficiency.projectedFlightTime,
//                 maintenance_status: route.flightEfficiency.maintenanceStatus,
//               };
//               return await fetchRouteScores(transformedRoute);
//             })
//           );
//           setRouteScores(scores);
//         } catch (error) {
//           console.error('Error fetching all route scores:', error);
//         }
//       }
//     };

//     fetchAllRouteScores();
//   }, [flight, routeScores.length]);

//   useEffect(() => {
//     if (routeScores.length > 0 && flight) {
//       const updatedRoutes = flight.routes.map((route, index) => ({
//         ...route,
//         scores: routeScores[index],
//       }));

//       // Sort routes by combined score in descending order
//       const sortedRoutes = updatedRoutes.sort((a, b) => b.scores.combined_score - a.scores.combined_score);
//       setSortedRoutes(sortedRoutes);
//     }
//   }, [routeScores, flight]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!flight) {
//     return <div>Flight not found</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Flight Details for {flight.flightNumber}</h1>
//       <p><strong>Airline:</strong> {flight.airlineName}</p>
//       <p><strong>Aircraft Type:</strong> {flight.aircraftType}</p>
//       <p><strong>Origin Airport:</strong> {flight.originAirport}</p>
//       <p><strong>Destination Airport:</strong> {flight.destinationAirport}</p>
//       <p><strong>Departure Time:</strong> {new Date(flight.departureTime).toLocaleString()}</p>
//       <p><strong>Arrival Time:</strong> {new Date(flight.arrivalTime).toLocaleString()}</p>
//       <h2 className="text-xl font-semibold mt-4 mb-2">Routes</h2>
//       <div className="flex flex-wrap">
//         {sortedRoutes.map((route, index) => (
//           <div key={index} className={`bg-white shadow-md rounded-lg p-4 mb-4 mr-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ${index === 0 ? 'border border-green-500' : ''}`}>
//             {index === 0 && <span className="text-green-500 font-bold">Recommended</span>}
           
            
//             <h3 className="font-semibold mt-2">Weather Conditions</h3>
//             <p>Visibility: {route.weatherConditions.visibility}</p>
//             <p>Turbulence Intensity: {route.weatherConditions.turbulenceIntensity}</p>
//             <p>Wind Shear: {route.weatherConditions.windShear}</p>
//             <p>Air Traffic Density: {route.weatherConditions.airTrafficDensity}</p>
//             <p>Precipitation: {route.weatherConditions.precipitation}</p>
//             <p>Pilot Experience: {route.weatherConditions.pilotExperience}</p>
//             <p>Weather Forecast Accuracy: {route.weatherConditions.weatherForecastAccuracy}</p>
//             <p>Maintenance History and Health Metrics: {route.weatherConditions.maintenanceHistoryAndHealthMetrics}</p>
//             <h3 className="font-semibold mt-2">Flight Conditions</h3>
//             <p>Fuel Consumption: {route.flightEfficiency.fuelConsumption}</p>
//             <p>Air Traffic Congestion: {route.flightEfficiency.airTrafficCongestion}</p>
//             <p>No Step Climbs: {route.flightEfficiency.noStepClimbs}</p>
//             <p>Aircraft Load Factor: {route.flightEfficiency.aircraftLoadFactor}</p>
//             <p>Projected Flight Time: {route.flightEfficiency.projectedFlightTime}</p>
//             <p>Maintenance Status: {route.flightEfficiency.maintenanceStatus}</p>
//             {route.scores && (
//               <div>
//                 <h4 className="font-semibold mt-2">Scores</h4>
//                 <p>Safety Score: {route.scores.safety_score}</p>
//                 <p>Efficiency Score: {route.scores.efficiency_score}</p>
//                 <p>Combined Score: {route.scores.combined_score}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FlightDetails;

'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const FlightDetails = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routeScores, setRouteScores] = useState([]);
  const [sortedRoutes, setSortedRoutes] = useState([]);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await fetch(`/api/flightData?id=${id}`);
        const data = await response.json();
        setFlight(data);
      } catch (error) {
        console.error('Error fetching flight data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchFlight();
    }
  }, [id]);

  const fetchRouteScores = async (route) => {
    try {
      const response = await fetch('https://flaskapp.qualicio.io/predict', {
      // const response = await fetch('http://localhost:5000/predict', {
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
    const fetchAllRouteScores = async () => {
      if (flight && routeScores.length === 0) {
        try {
          const scores = await Promise.all(
            flight.routes.map(async (route) => {
              const transformedRoute = {
                weather: route.weatherConditions.weather,
                visibility: route.weatherConditions.visibility,
                turbulence_intensity: route.weatherConditions.turbulenceIntensity,
                wind_shear: route.weatherConditions.windShear,
                air_traffic_density: route.weatherConditions.airTrafficDensity,
                precipitation: route.weatherConditions.precipitation,
                pilot_experience: route.weatherConditions.pilotExperience,
                forecast_accuracy: route.weatherConditions.weatherForecastAccuracy,
                maintenance_history: route.weatherConditions.maintenanceHistoryAndHealthMetrics,
                fuel_consumption: route.flightEfficiency.fuelConsumption,
                air_traffic_congestion: route.flightEfficiency.airTrafficCongestion,
                no_step_climbs: route.flightEfficiency.noStepClimbs,
                aircraft_load_factor: route.flightEfficiency.aircraftLoadFactor,
                projected_flight_time: route.flightEfficiency.projectedFlightTime,
                maintenance_status: route.flightEfficiency.maintenanceStatus,
                engine_temperature: flight.flightHealth.engineTemperature,
                engine_vibration_levels: flight.flightHealth.engineVibrationLevels,
                oil_pressure: flight.flightHealth.oilPressure,
                hydraulic_system_pressure: flight.flightHealth.hydraulicSystemPressure,
                electrical_system_voltage: flight.flightHealth.electricalSystemVoltage,
                oil_temperature: flight.flightHealth.oilTemperature,
                Aircraft_Model: flight.aircraftType, // Assuming aircraftType is the model
              };
              return await fetchRouteScores(transformedRoute);
            })
          );
          setRouteScores(scores);
        } catch (error) {
          console.error('Error fetching all route scores:', error);
        }
      }
    };

    fetchAllRouteScores();
  }, [flight, routeScores.length]);

  useEffect(() => {
    if (routeScores.length > 0 && flight) {
      const updatedRoutes = flight.routes.map((route, index) => ({
        ...route,
        scores: routeScores[index],
      }));

      // Sort routes by combined score in descending order
      const sortedRoutes = updatedRoutes.sort((a, b) => b.scores.combined_score - a.scores.combined_score);
      setSortedRoutes(sortedRoutes);
    }
  }, [routeScores, flight]);

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
      <p><strong>Origin Airport:</strong> {flight.originAirport}</p>
      <p><strong>Destination Airport:</strong> {flight.destinationAirport}</p>
      <p><strong>Departure Time:</strong> {new Date(flight.departureTime).toLocaleString()}</p>
      <p><strong>Arrival Time:</strong> {new Date(flight.arrivalTime).toLocaleString()}</p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Routes</h2>
      <div className="flex flex-wrap">
        {sortedRoutes.map((route, index) => (
          <div key={index} className={`bg-white shadow-md rounded-lg p-4 mb-4 mr-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ${index === 0 ? 'border border-green-500' : ''}`}>
            {index === 0 && <span className="text-green-500 font-bold">Recommended</span>}
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
            <p>Fuel Consumption: {route.flightEfficiency.fuelConsumption}</p>
            <p>Air Traffic Congestion: {route.flightEfficiency.airTrafficCongestion}</p>
            <p>No Step Climbs: {route.flightEfficiency.noStepClimbs}</p>
            <p>Aircraft Load Factor: {route.flightEfficiency.aircraftLoadFactor}</p>
            <p>Projected Flight Time: {route.flightEfficiency.projectedFlightTime}</p>
            <p>Maintenance Status: {route.flightEfficiency.maintenanceStatus}</p>
            {route.scores && (
              <div>
                <h4 className="font-semibold mt-2">Scores</h4>
                <p>Safety Score: {route.scores.safety_score}</p>
                <p>Efficiency Score: {route.scores.efficiency_score}</p>
                <p>Combined Score: {route.scores.combined_score}</p>
                <p>Health Score: {route.scores.health_score}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDetails;

