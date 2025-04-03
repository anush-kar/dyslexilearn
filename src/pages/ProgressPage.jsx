import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
`;

const Title = styled.h1`
  color: #4b0082;
  margin-bottom: 20px;
`;

const MetricsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const MetricCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 180px;
`;

const MetricValue = styled.h2`
  color: #4b0082;
  margin: 10px 0;
`;

const DashboardPage = () => {
  const [metrics, setMetrics] = useState(null);
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/progress`);
        const data = await response.json();
        
        setMetrics(data.lifetime);
        setProgressData(data.timeline);
      } catch (error) {
        console.error("Error fetching progress data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <PageContainer>
      <Title>Practice Dashboard</Title>
      
      {metrics && (
        <MetricsContainer>
          {Object.keys(metrics).map((category) => (
            <MetricCard key={category}>
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <MetricValue>✅ {metrics[category].correct}</MetricValue>
              <MetricValue>🎯 {metrics[category].total}</MetricValue>
            </MetricCard>
          ))}
        </MetricsContainer>
      )}

      <Title>Progress Over Time</Title>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={progressData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis dataKey="attemptBatch" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="correct" stroke="#4B0082" strokeWidth={2} name="Words" />
          <Line type="monotone" dataKey="phrases" stroke="#FF5733" strokeWidth={2} name="Phrases" />
          <Line type="monotone" dataKey="alphabet" stroke="#008000" strokeWidth={2} name="Alphabet" />
        </LineChart>
      </ResponsiveContainer>
    </PageContainer>
  );
};

export default DashboardPage;
