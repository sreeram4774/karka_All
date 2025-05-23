import React, { useState } from "react";

const districtData = [{
  "Tiruchy": { "district": ["a", "b", "c"] },
  "Madurai": { "district": ["d", "e", "f"] },
  "Kannyakumari": { "district": ["g", "h", "j"] }
}];

const One = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setSelectedDistrict(""); // Reset district when city changes

    const data = Object.entries(districtData[0]);
    const result = data.filter(([key]) => key === city);
    if (result.length > 0) {
      setDistricts(result[0][1].district);
    } else {
      setDistricts([]);
    }
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  return (
    <>
      <h3>Select City</h3>
      <select onChange={handleChange} value={selectedCity}>
        <option value="">--Select--</option>
        {Object.keys(districtData[0]).map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      {districts.length > 0 && (
        <>
          <h3>Select District</h3>
          <select onChange={handleDistrictChange} value={selectedDistrict}>
            <option value="">--Select--</option>
            {districts.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </>
      )}

      {selectedCity && <h3>Selected City: {selectedCity}</h3>}
      {selectedDistrict && <h3>Selected District: {selectedDistrict}</h3>}
    </>
  );
};

export default One;
