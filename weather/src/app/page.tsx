"use client";
import React, { useState } from "react";
import WeatherCard from "@/components/weather/WeatherCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState();

  function handleSearch() {
    console.log("handle search");
  }

  function handleLocationSearch() {
    console.log("handle location search");
  }

  return (
    <div className="p-20">
      <WeatherCard
        onSearch={handleSearch}
        onGetCurrentLocation={handleLocationSearch}
        isLoading={isLoading}
      />
    </div>
  );
}
