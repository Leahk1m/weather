"use client";
import React from "react";
import WeatherSearch from "@/components/weather/WeatherSearch";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cloud } from "lucide-react";

interface WeatherCardProps {
  onSearch: (city: string) => void;
  onGetCurrentLocation: () => void;
  isLoading: boolean;
}

function WeatherCard({
  onSearch,
  onGetCurrentLocation,
  isLoading,
}: WeatherCardProps) {
  return (
    <Card className="flex flex-col justify-center items-center gap-4 p-10">
      <CardHeader className="flex flex-col justify-center items-center gap-4 w-full">
        <Cloud />
        <CardTitle>Let's see the weather!</CardTitle>
      </CardHeader>
      <CardDescription className="flex flex-col justify-center items-center gap-4">
        Enter a city name to check its weather
      </CardDescription>
      <WeatherSearch
        onSearch={onSearch}
        onGetCurrentLocation={onGetCurrentLocation}
        isLoading={isLoading}
      />
    </Card>
  );
}

export default WeatherCard;
