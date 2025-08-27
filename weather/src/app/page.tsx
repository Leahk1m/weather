"use client";
import React, { useState } from "react";
import WeatherCard from "@/components/weather/WeatherCard";
import WeatherForecast from "@/components/weather/WeatherForecast";
import CurrentConditions from "@/components/weather/CurrentConditions";

export type Condition = {
  address: string;
  currentConditions: any;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [conditions, setConditions] = useState<Condition>();
  const [weatherData, setWeatherData] = useState();

  const today = new Date().toISOString().substring(0, 10);

  function handleSearch(city: string) {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${today}?key=${"Q7DSJK94HGZK4F3KV6H529Q3H"}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setConditions({
            address: data.address,
            currentConditions: data.currentConditions,
          });
        }
      })
      .catch((err) => console.log("err", err));
  }

  function handleLocationSearch() {
    console.log("handle location search");
  }

  return (
    <div className="p-20 dark flex flex-col gap-8">
      <WeatherCard
        onSearch={handleSearch}
        onGetCurrentLocation={handleLocationSearch}
        isLoading={isLoading}
      />

      {conditions ? <CurrentConditions conditions={conditions} /> : null}

      <WeatherForecast />
    </div>
  );
}
