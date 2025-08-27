"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface WeatherSearchProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
  error: boolean;
  setError: (err: boolean) => void;
}

function WeatherProps({
  onSearch,
  isLoading,
  error,
  setError,
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
          onChange={(e) => {
            setError(false);
            setSearchTerm(e.target.value);
          }}
          placeholder="City"
        />
        {error ? (
          <p className="dark:text-red-400 text-sm">
            Please enter a valid location
          </p>
        ) : null}
        <Button type="submit" variant="outline" disabled={isLoading}>
          Check weather
        </Button>
      </div>
    </form>
  );
}

export default WeatherProps;
