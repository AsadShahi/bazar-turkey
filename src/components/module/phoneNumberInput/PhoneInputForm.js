'use client'
import React, { useState } from 'react';
import WorldFlag from 'react-world-flags'; // Import WorldFlag component



// Function to convert English numerals to Persian numerals
const convertToPersianNumbers = (input) => {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return input.replace(/[0-9]/g, (match) => persianNumbers[parseInt(match)]);
};



const PhoneInput = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Turkey',
    code: '+۹۰',
    flag: 'TR', 
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const countries = [
    { name: 'Iran', code: '+۹۸', flag: 'IR' }, 
    { name: 'Turkey', code: '+۹۰', flag: 'TR' },

  ];

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(convertToPersianNumbers(value)); // Convert to Persian numbers as user types
  };



  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative  w-full max-w-sm" dir="ltr">
      <div className="flex items-center border border-gray-300 dark:border-[#383A40] rounded-lg overflow-hidden shadow-sm">
        {/* Country Selector */}
        <div
          className="flex items-center cursor-pointer pl-2 border-r-2 pr-1"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500 pr-1 dark:text-white text-base"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isDropdownOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
            />
          </svg>
          {/* Country Flag */}
          <WorldFlag code={selectedCountry.flag} style={{ width: '20px', height: '20px' }} />
          <span className="mx-2 text-sm text-gray-700 dark:text-white">{selectedCountry.code}</span>
        </div>

        {/* Phone Number Input */}
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => handlePhoneNumberChange(e)}
          placeholder="۹۰۲۱۰۲۹۲۳۴"
          className="flex-1 px-4 py-2 text-right focus:outline-none dark:bg-[#25272C] dark:text-white "
          style={{
            fontFamily:'yekan',
            border:'none',
            width: '100%',
            height: '56px',
            borderRadius: '0.375rem',
            fontSize: '14px',
            textAlign: 'left',
          }}
        />

      

      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute  dark:bg-[#25272C] dark:text-white right-0 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full">
          {countries.map((country) => (
            <div
              key={country.code}
              className="flex  dark:bg-[#25272C] dark:hover:bg-slate-800 dark:text-white items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleCountrySelect(country)}
            >
              {/* flags*/}
              <WorldFlag code={country.flag} className=' ' style={{ width: '20px', height: '20px' }} />
              <span className="mx-2 text-sm">{country.name}</span>
              <span className="text-gray-500 dark:text-white ">{country.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneInput;


