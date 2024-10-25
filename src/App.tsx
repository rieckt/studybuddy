import React, { useState } from 'react';
import { Book, Calendar as CalendarIcon, Clock, FileText, GraduationCap, Layout, Menu, PenTool, RefreshCw } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CalendarView from './components/Calendar';
import Modules from './components/Modules';
import Notes from './components/Notes';
import SpacedRepetition from './components/SpacedRepetition';
import Schedule from './components/Schedule';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navigation = [
    { name: 'Dashboard', icon: Layout, id: 'dashboard' },
    { name: 'Modules', icon: Book, id: 'modules' },
    { name: 'Calendar', icon: CalendarIcon, id: 'calendar' },
    { name: 'Schedule', icon: Clock, id: 'schedule' },
    { name: 'Notes', icon: PenTool, id: 'notes' },
    { name: 'Study Cards', icon: RefreshCw, id: 'spaced-repetition' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'modules':
        return <Modules />;
      case 'calendar':
        return <CalendarView />;
      case 'schedule':
        return <Schedule />;
      case 'notes':
        return <Notes />;
      case 'spaced-repetition':
        return <SpacedRepetition />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-warmGray-50">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          navigation={navigation}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        
        <main className="flex-1 overflow-y-auto bg-warmGray-50 p-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-md text-warmGray-500 hover:bg-warmGray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-3xl font-bold text-warmGray-800 flex items-center gap-2">
                <GraduationCap className="h-8 w-8 text-primary-500" />
                Study Buddy
              </h1>
            </div>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;