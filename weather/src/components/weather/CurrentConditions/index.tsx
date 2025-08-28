"use client";

import React from "react";
import { Condition } from "@/app/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Wind, Droplets, Cloud } from "lucide-react";
import { motion } from "motion/react";

interface LocationResultProps {
  conditions: Condition;
}

function LocationResult({ conditions }: LocationResultProps) {
  const { address } = conditions || {};
  const { temp, precip, windspeed, humidity } =
    conditions?.currentConditions || {};

  return (
    <motion.div
      key={temp}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <Card className="flex flex-row justify-between items-center">
        <div className="flex flex-col p-6 gap-3">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <p className="text-lg font-bold">{`${address[0].toUpperCase()}${address.slice(
              1
            )}`}</p>
          </div>

          <div>
            <p className="text-2xl font-bold">{`${temp} ${"\u00b0"}F`}</p>
            <p className="text-lg font-thin">
              {conditions?.currentConditions?.conditions}
            </p>
          </div>
        </div>

        <CardContent>
          <div className="flex flex-col gap-2 opacity-50">
            <div className="flex items-center gap-2">
              <Wind />
              <p>{`Wind speed: ${windspeed} km/h`}</p>
            </div>

            <div className="flex items-center gap-2">
              <Droplets />
              <p>{`Humidity: ${humidity}%`}</p>
            </div>

            <div className="flex items-center gap-2">
              <Cloud />
              <p>{`Precipitation: ${precip}%`}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default LocationResult;
