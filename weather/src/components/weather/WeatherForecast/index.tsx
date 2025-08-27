"use client";
import React from "react";
import ForecastCard from "@/components/weather/WeatherForecast/ForecastCard";
import { CloudMoon } from "lucide-react";
import { motion } from "motion/react";
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
      </CardHeader>

      <CardContent className="flex flex-row gap-2 overflow-scroll">
        {forecast?.hours?.map((hour: any) => (
          <motion.div
            key={hour?.temp}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <ForecastCard
              key={hour?.datetime}
              time={hour?.datetime.slice(0, 5)}
              temp={hour?.temp}
              conditions={hour?.conditions}
            />
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}

export default WeatherForecast;
