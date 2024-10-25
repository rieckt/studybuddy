import React from 'react';
import { X } from 'lucide-react';

function Sidebar({ navigation, activeTab, setActiveTab, isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div
      className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 border-r border-warmGray-200`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-semibold text-warmGray-800">Menu</span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-warmGray-500 hover:bg-warmGray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`${
                activeTab === item.id
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-warmGray-600 hover:bg-warmGray-50'
              } group flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full transition-colors duration-150`}
            >
              <item.icon
                className={`${
                  activeTab === item.id ? 'text-primary-500' : 'text-warmGray-400'
                } mr-3 h-5 w-5`}
              />
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;