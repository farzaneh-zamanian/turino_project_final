"use client";
import { renderUniqueOptions } from '@/core/utils/hepler';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for the date picker

const TourBookingForm = ({ data }) => {


  console.log(data)
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    startDate: null,
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setForm((prevForm) => ({
      ...prevForm,
      startDate: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the booking logic here, e.g., fetch available tours based on origin, destination, and date
    console.log('Origin:', form.origin);
    console.log('Destination:', form.destination);
    console.log('Selected Date:', form.startDate);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Origin Cities */}
      <div>
        <select
          id="origin"
          name="origin"
          value={form.origin}
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
          value={form.destination}
          onChange={changeHandler}
          className="placeholder:text-gray-400 rounded-md border border-gray-300 p-2 w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>مقصد</option>
          {/* Render Destination options */}
          {renderUniqueOptions(data, 'destination')}
        </select>
      </div>
      {/* Start Date and End Date */}
      <div>
        <label className="block text-lg font-medium">Select Date</label>
        <DatePicker
          selected={form.startDate}
          onChange={handleDateChange}
          className="placeholder:text-gray-400 rounded-md border border-gray-300 p-2 w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          dateFormat="MMMM d, yyyy" // Format of the date displayed
          placeholderText="Select a date"
        />
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Search Tours
      </button>
    </form>
  );
};

export default TourBookingForm;