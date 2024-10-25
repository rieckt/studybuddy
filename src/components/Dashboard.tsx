import React from 'react';
import { Book, Calendar, Clock, FileText } from 'lucide-react';

function Dashboard() {
  const upcomingEvents = [
    { title: 'Mathematics Exam', date: '2024-03-20', type: 'exam' },
    { title: 'Physics Assignment', date: '2024-03-15', type: 'assignment' },
    { title: 'Study Group Meeting', date: '2024-03-12', type: 'meeting' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200">
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Book className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-warmGray-500">Active Modules</p>
              <p className="text-2xl font-semibold text-warmGray-900">6</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200">
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Calendar className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-warmGray-500">Upcoming Tests</p>
              <p className="text-2xl font-semibold text-warmGray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200">
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Clock className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-warmGray-500">Study Hours</p>
              <p className="text-2xl font-semibold text-warmGray-900">24h</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200">
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 rounded-lg">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-warmGray-500">Notes</p>
              <p className="text-2xl font-semibold text-warmGray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200">
          <h2 className="text-lg font-semibold text-warmGray-900 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-warmGray-50"
              >
                <div>
                  <p className="font-medium text-warmGray-900">{event.title}</p>
                  <p className="text-sm text-warmGray-500">{event.date}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200">
          <h2 className="text-lg font-semibold text-warmGray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 text-center rounded-lg bg-warmGray-50 hover:bg-warmGray-100 transition-colors">
              <FileText className="h-6 w-6 mx-auto mb-2 text-primary-500" />
              <span className="text-sm font-medium text-warmGray-700">New Note</span>
            </button>
            <button className="p-4 text-center rounded-lg bg-warmGray-50 hover:bg-warmGray-100 transition-colors">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-primary-500" />
              <span className="text-sm font-medium text-warmGray-700">Add Event</span>
            </button>
            <button className="p-4 text-center rounded-lg bg-warmGray-50 hover:bg-warmGray-100 transition-colors">
              <Book className="h-6 w-6 mx-auto mb-2 text-primary-500" />
              <span className="text-sm font-medium text-warmGray-700">Add Module</span>
            </button>
            <button className="p-4 text-center rounded-lg bg-warmGray-50 hover:bg-warmGray-100 transition-colors">
              <Clock className="h-6 w-6 mx-auto mb-2 text-primary-500" />
              <span className="text-sm font-medium text-warmGray-700">Track Time</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;