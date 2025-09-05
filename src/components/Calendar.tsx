"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

// Define types
interface DeliveryDateSelectorProps {
  onDateSelect?: (date: Date | null, timeSlot: string) => void;
}

const DeliveryDateSelector: React.FC<DeliveryDateSelectorProps> = ({ onDateSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date("2025-09-04T13:49:00Z")); // Updated to current time
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());

  const days = ["S", "M", "T", "W", "Th", "F", "S"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(year, month, day);
    if (newDate >= currentDate) {
      setSelectedDate(newDate);
      if (onDateSelect) onDateSelect(newDate, timeSlot);
      setIsOpen(false);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const daysArray = [];

    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear();
      const isPast = new Date(year, month, day) < currentDate;
      daysArray.push(
        <div
          key={day}
          className={`p-2 text-center cursor-pointer rounded-full hover:bg-gray-200 ${isToday ? "bg-blue-500 text-white" : ""} ${isPast ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"}`}
          onClick={() => !isPast && handleDateSelect(day)}
        >
          {day}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className="relative w-full  mx-auto">
      <label className="block text-sm font-semibold mb-1 text-gray-700">Select Delivery Date</label>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-between w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span>{selectedDate ? selectedDate.toDateString() : "Select Delivery Date"}</span>
        </div>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl p-4 w-80 shadow-lg relative">
            <div className="flex justify-between items-center mb-4">
              <button onClick={handlePrevMonth} className="text-gray-500 hover:text-gray-700">
                ←
              </button>
              <h2 className="font-semibold text-lg">{months[month]} {year}</h2>
              <button onClick={handleNextMonth} className="text-gray-500 hover:text-gray-700">
                →
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {days.map((day) => (
                <div key={day} className="p-2 text-center font-medium text-gray-600">{day}</div>
              ))}
              {renderCalendar()}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-1 text-gray-700">Time Slot</label>
              <select
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={timeSlot}
                onChange={(e) => {
                  setTimeSlot(e.target.value);
                  if (onDateSelect && selectedDate) onDateSelect(selectedDate, e.target.value);
                }}
              >
                <option value="">Select Time Slot</option>
                <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 5:00 PM">12:00 PM - 5:00 PM</option>
                <option value="5:00 PM - 8:00 PM">5:00 PM - 8:00 PM</option>
              </select>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (onDateSelect && selectedDate) onDateSelect(selectedDate, timeSlot);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryDateSelector;