import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { id: 1, name: "Distributor A", lastMonth: 1200, forecastNextMonth: 1500, ytdAverage: 1100 },
  { id: 2, name: "Distributor B", lastMonth: 900, forecastNextMonth: 950, ytdAverage: 875 },
  { id: 3, name: "Distributor C", lastMonth: 1600, forecastNextMonth: 1700, ytdAverage: 1450 },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Augur Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockData.map((distributor) => (
          <div key={distributor.id} className="shadow-lg rounded-xl bg-white p-4">
            <h2 className="text-xl font-semibold">{distributor.name}</h2>
            <p>Last Month: {distributor.lastMonth}</p>
            <p>Forecast Next Month: {distributor.forecastNextMonth}</p>
            <p>YTD Avg: {distributor.ytdAverage}</p>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={[
                { name: "Last", value: distributor.lastMonth },
                { name: "Forecast", value: distributor.forecastNextMonth },
                { name: "YTD Avg", value: distributor.ytdAverage },
              ]}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
