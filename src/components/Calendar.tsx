import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';

type Event = {
  id: string;
  title: string;
  date: Date;
  type: 'exam' | 'assignment' | 'meeting';
  location?: string;
  time?: string;
};

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Mathematics Final Exam',
      date: new Date(2024, 2, 20),
      type: 'exam',
      location: 'Room 101',
      time: '09:00',
    },
    {
      id: '2',
      title: 'Physics Assignment Due',
      date: new Date(2024, 2, 15),
      type: 'assignment',
      time: '23:59',
    },
  ]);

  const selectedDateEvents = events.filter(
    (event) => format(event.date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-warmGray-900">Calendar</h2>
        <button
          onClick={() => setShowAddEvent(true)}
          className="btn-primary flex items-center gap-2"
        >
          <CalendarIcon className="h-5 w-5" />
          Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="w-full border-none"
              tileClassName={({ date }) => {
                const hasEvent = events.some(
                  (event) => format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                );
                return hasEvent ? 'bg-primary-100 text-primary-700 rounded-lg' : '';
              }}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200">
            <h3 className="text-lg font-semibold text-warmGray-900 mb-4">
              Events for {format(selectedDate, 'MMMM d, yyyy')}
            </h3>
            <div className="space-y-4">
              {selectedDateEvents.length === 0 ? (
                <p className="text-warmGray-500 text-center py-4">No events for this date</p>
              ) : (
                selectedDateEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-4 rounded-lg bg-warmGray-50 space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-warmGray-900">{event.title}</h4>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700">
                        {event.type}
                      </span>
                    </div>
                    {event.time && (
                      <div className="flex items-center text-sm text-warmGray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-sm text-warmGray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;