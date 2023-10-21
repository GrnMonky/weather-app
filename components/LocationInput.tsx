// components/LocationInput.tsx
import React, { useState } from 'react';

interface LocationInputProps {
  setLocation: (location: string) => void;
}

function LocationInput({ setLocation }: LocationInputProps) {
  const [inputLocation, setInputLocation] = useState<string>('');

  const handleLocationChange = () => {
    setLocation(inputLocation);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location (e.g., city or coordinates)"
        value={inputLocation}
        onChange={(e) => setInputLocation(e.target.value)}
      />
      <button onClick={handleLocationChange}>Get Weather</button>
    </div>
  );
}

export default LocationInput;
