import React from 'react';
import { Clock } from 'lucide-react';

type ScheduleItem = {
  id: string;
  day: string;
  time: string;
  module: string;
  type: string;
  room: string;
};

function Schedule() {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = Array.from({ length: 8 }, (_, i) => `${i + 8}:00`);

  const scheduleItems: ScheduleItem[] = [
    {
      id: '1',
      day: 'Monday',
      time: '10:00',
      module: 'Mathematics III',
      type: 'Lecture',
      room: 'Room 101',
    },
    {
      id: '2',
      day: 'Tuesday',
      time: '14:00',
      module: 'Physics II',
      type: 'Lab',
      room: 'Lab 204',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-warmGray-900">Schedule</h2>
        <button className="btn-primary flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Add Class
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-warmGray-200 overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-6 border-b border-warmGray-200">
            <div className="p-4 font-medium text-warmGray-500">Time</div>
            {weekDays.map((day) => (
              <div key={day} className="p-4 font-medium text-warmGray-500">
                {day}
              </div>
            ))}
          </div>

          <div className="divide-y divide-warmGray-200">
            {timeSlots.map((time) => (
              <div key={time} className="grid grid-cols-6">
                <div className="p-4 text-sm text-warmGray-500 border-r border-warmGray-200">
                  {time}
                </div>
                {weekDays.map((day) => {
                  const item = scheduleItems.find(
                    (s) => s.day === day && s.time === time
                  );
                  return (
                    <div key={day} className="p-4">
                      {item && (
                        <div className="p-2 rounded-lg bg-primary-50 border border-primary-100">
                          <p className="font-medium text-primary-700">{item.module}</p>
                          <p className="text-sm text-primary-600">{item.type}</p>
                          <p className="text-xs text-primary-500">{item.room}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;