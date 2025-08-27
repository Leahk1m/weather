"use client";

import React from "react";
import { Condition } from "@/app/page";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Wind, Droplets, Cloud } from "lucide-react";

interface LocationResultProps {
  conditions: Condition;
}

function LocationResult({ conditions }: LocationResultProps) {
  const { address } = conditions || {};
  const { temp, precip, windspeed, humidity } = conditions?.currentConditions;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <p className="text-lg font bold">{`${address[0].toUpperCase()}${address.slice(
            1
          )}`}</p>
        </div>
        <CardTitle>
          <div>
            <p className="text-xl">{`${temp} ${"\u00b0"}F`}</p>
            <p className="text-lg">
              {conditions?.currentConditions?.conditions}
            </p>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Wind />
            <p>{`Wind speed: ${windspeed} km/h`}</p>
          </div>

          <div className="flex items-center gap-1">
            <Droplets />
            <p>{`Humidity: ${humidity}%`}</p>
          </div>

          <div className="flex items-center gap-1">
            <Cloud />
            <p>{`Precipitation: ${precip}%`}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LocationResult;
