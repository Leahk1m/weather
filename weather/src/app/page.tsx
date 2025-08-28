"use client";
import React, { useState } from "react";
import WeatherCard from "@/components/weather/WeatherCard";
import WeatherForecast from "@/components/weather/WeatherForecast";
import CurrentConditions from "@/components/weather/CurrentConditions";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "@/components/ThemeToggle";

export type Condition = {
  address: string;
  currentConditions: any;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [conditions, setConditions] = useState<Condition>();
  const [error, setError] = useState(false);

  const today = new Date().toISOString().substring(0, 10);

  function handleSearch(city: string) {
    setIsLoading(true);
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${today}?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setConditions({
            address: data.address,
            currentConditions: data.days[0],
          });
          setError(false);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div>
      <ThemeToggle />
      <div className="flex p-10 flex-col gap-8">
        <WeatherCard
          onSearch={handleSearch}
          isLoading={isLoading}
          error={error}
          setError={setError}
        />
        <AnimatePresence>
          {conditions && (
            <motion.div
              key={conditions?.currentConditions}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <CurrentConditions conditions={conditions} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {conditions?.currentConditions && (
            <motion.div
              key={conditions.currentConditions}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3,
              }}
            >
              <WeatherForecast forecast={conditions?.currentConditions} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
