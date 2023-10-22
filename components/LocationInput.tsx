// LocationInput.tsx
import React, { useState } from 'react';

interface LocationInputProps {
  setLocation: (location: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ setLocation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleLocationChange = () => {
    setLocation(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleLocationChange}>Set Location</button>
    </div>
  );
};

export default LocationInput;
