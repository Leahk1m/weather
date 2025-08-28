"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import ConditionWithIcon, {
  WeatherCondition,
} from "@/components/weather/ConditionWithIcon";

interface ForecastCardProps {
  time: string;
  temp: string;
  conditions: WeatherCondition;
}

function ForecastCard({ time, temp, conditions }: ForecastCardProps) {
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
      <Card className="">
        <div className="flex flex-col p-5 gap-3 py-0 text-center min-w-30">
          <p className="opacity-50">{time}</p>
          <p className="font-bold">{`${temp} ${"\u00b0"}F`}</p>
          <ConditionWithIcon condition={conditions} />
        </div>
      </Card>
    </motion.div>
  );
}

export default ForecastCard;
