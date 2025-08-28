"use client";

import React from "react";
import { CloudDrizzle, Cloudy, CloudSun, Sun } from "lucide-react";

export type WeatherCondition = "clear" | "partially cloudy" | "rain";

interface ConditionWithIconProps {
  condition: WeatherCondition;
}

function ConditionWithIcon({ condition }: ConditionWithIconProps) {
  function handleIcon(condition: WeatherCondition) {
    const lc = condition.toLowerCase();
    if (lc.includes("clear")) {
      return <Sun />;
    } else if (lc.includes("rain")) {
      return <CloudDrizzle />;
    } else if (lc.includes("partially cloudy")) {
      return <CloudSun />;
    } else if (lc.includes("cloudy")) {
      return <Cloudy />;
    } else if (lc.includes("rain")) {
      return <CloudDrizzle />;
    }
  }
  return (
    <div className="flex flex-col items-center">
      {handleIcon(condition)}
      <p className="opacity-50">{condition}</p>
    </div>
  );
}

export default ConditionWithIcon;
