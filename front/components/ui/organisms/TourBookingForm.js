"use client";
import { renderUniqueOptions } from '@/core/utils/hepler';
import React, { useState } from 'react';
import PersianDatePicker from './PersianDatePicker';

const TourBookingquery = ({ data }) => {
  const [query, setquery] = useState({
    origin: "",
    destination: "",
    dateRange: [null, null], // Initialize state for date range
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setquery((prevquery) => ({
      ...prevquery,
      [name]: value,
    }));
  };

  const handleDateRangeChange = (dateRange) => {
    setquery((prevquery) => ({
      ...prevquery,
      dateRange,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the booking logic here, e.g., fetch available tours based on origin, destination, and date range
    console.log('Origin:', query.origin);
    console.log('Destination:', query.destination);
    console.log('Selected Date Range:', query.dateRange);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Origin Cities */}
      <div>
        <select
          id="origin"
          name="origin"
          value={query.origin}
          onChange={changeHandler}
          className="placeholder:text-gray-400 rounded-md border border-gray-300 p-2 w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>مبدا</option>
          {/* Render Origin options */}
          {renderUniqueOptions(data, 'origin')}
        </select>
      </div>
      {/* Destination Cities */}
      <div>
        <select
          id="destination"
          name="destination"
          value={query.destination}
          onChange={changeHandler}
          className="placeholder:text-gray-400 rounded-md border border-gray-300 p-2 w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>مقصد</option>
          {/* Render Destination options */}
          {renderUniqueOptions(data, 'destination')}
        </select>
      </div>
      {/* Date Range */}
      <div>
        <PersianDatePicker onChange={handleDateRangeChange} />
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Search Tours
      </button>
    </form>
  );
};

export default TourBookingquery;