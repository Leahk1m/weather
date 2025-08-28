"use client";
import React from "react";
import ForecastCard from "@/components/weather/WeatherForecast/ForecastCard";
import { CloudMoon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface WeatherForecastProps {
  forecast: any;
}

function WeatherForecast({ forecast }: WeatherForecastProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CloudMoon />
          <p className="text-xl font-bold">24 Hour Forecast</p>
        </div>

        <p>{forecast?.description}</p>
      </CardHeader>

      <CardContent className="flex flex-row gap-2 overflow-scroll">
        {forecast?.hours?.map((hour: any) => (
          <ForecastCard
            key={hour?.datetime}
            time={hour?.datetime.slice(0, 5)}
            temp={hour?.temp}
            conditions={hour?.conditions}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default WeatherForecast;
