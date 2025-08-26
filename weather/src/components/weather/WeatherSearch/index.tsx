"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface WeatherSearchProps {
  onSearch: (city: string) => void;
  onGetCurrentLocation: () => void;
  isLoading: boolean;
}

function WeatherProps({
  onSearch,
  onGetCurrentLocation,
  isLoading,
}: WeatherSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="City"
      />
      <Button variant="outline">Check weather</Button>
    </div>
  );
}

export default WeatherProps;
