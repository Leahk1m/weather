"use client";

import React from "react";
import { Card } from "@/components/ui/card";

interface ForecastCardProps {
  time: string;
  temp: string;
  conditions: string;
}

function ForecastCard({ time, temp, conditions }: ForecastCardProps) {
  return (
    <Card className="">
      <div className="flex flex-col p-5 gap-3 py-0 text-center min-w-30">
        <p className="opacity-50">{time}</p>
        <p className="font-bold">{`${temp} ${"\u00b0"}F`}</p>
        <p className="opacity-50">{conditions}</p>
      </div>
    </Card>
  );
}

export default ForecastCard;
