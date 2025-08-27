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

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="City"
        />
        <Button type="submit" variant="outline">
          Check weather
        </Button>
      </div>
    </form>
  );
}

export default WeatherProps;
