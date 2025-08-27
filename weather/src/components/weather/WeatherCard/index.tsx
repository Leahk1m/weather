"use client";
import React from "react";
import WeatherSearch from "@/components/weather/WeatherSearch";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CloudSun } from "lucide-react";

interface WeatherCardProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
  error: boolean;
  setError: (err: boolean) => void;
}

function WeatherCard({
  onSearch,
  isLoading,
  error,
  setError,
}: WeatherCardProps) {
  return (
    <Card className="flex flex-col justify-center items-center gap-4 p-10">
      <CardHeader className="flex flex-col justify-center items-center gap-4 w-full">
        <CloudSun size={50} />

        <CardTitle>Let's see the weather!</CardTitle>
      </CardHeader>
      <CardDescription className="flex flex-col justify-center items-center gap-4">
        Enter a city name to check its weather
      </CardDescription>
      <WeatherSearch
        onSearch={onSearch}
        isLoading={isLoading}
        error={error}
        setError={setError}
      />
    </Card>
  );
}

export default WeatherCard;
