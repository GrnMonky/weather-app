// LocationInput.tsx
import React, { useState } from 'react';

interface LocationInputProps {
  setLocation: (location: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ setLocation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleLocationChange = () => {
    //Need to check for valid location first
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
    className="text-black bg-white" 
  />
  <button
    onClick={handleLocationChange}
    className="text-white bg-gray-400 p-2 rounded-md hover:bg-gray-500"
  >
    Set Location
  </button>
</div>
  );
};

export default LocationInput;
