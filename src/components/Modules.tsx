import React, { useState } from 'react';
import { Book, Plus, MoreVertical, Pencil, Trash2 } from 'lucide-react';

interface Module {
  id: string;
  name: string;
  professor: string;
  semester: string;
  credits: number;
  progress: number;
  abbreviation: string;
  lp: number;
}

function Modules() {
  const [modules, setModules] = useState<Module[]>([
    {
      id: '1',
      name: 'Programmieren I',
      abbreviation: 'Prog I',
      professor: 'Prof. Weber',
      semester: '1. Semester',
      credits: 4,
      lp: 7,
      progress: 65,
    },
    {
      id: '2',
      name: 'Informatik I',
      abbreviation: 'Inf I',
      professor: 'Prof. Schmidt',
      semester: '1. Semester',
      credits: 6,
      lp: 7,
      progress: 40,
    },
    {
      id: '3',
      name: 'Datenbanken',
      abbreviation: 'Db',
      professor: 'Prof. Meyer',
      semester: '1. Semester',
      credits: 4,
      lp: 7,
      progress: 55,
    },
    {
      id: '4',
      name: 'Mathematik I',
      abbreviation: 'Ma I',
      professor: 'Prof. Klein',
      semester: '1. Semester',
      credits: 8,
      lp: 9,
      progress: 30,
    },
  ]);

  const [showAddModule, setShowAddModule] = useState(false);
  const [newModule, setNewModule] = useState<Partial<Module>>({
    name: '',
    professor: '',
    semester: '',
    credits: 0,
    lp: 0,
    abbreviation: '',
  });

  const handleAddModule = () => {
    if (newModule.name && newModule.professor && newModule.semester && newModule.credits) {
      setModules([
        ...modules,
        {
          id: Date.now().toString(),
          name: newModule.name,
          professor: newModule.professor,
          semester: newModule.semester,
          credits: newModule.credits,
          lp: newModule.lp || 0,
          progress: 0,
          abbreviation: newModule.abbreviation || '',
        },
      ]);
      setShowAddModule(false);
      setNewModule({ name: '', professor: '', semester: '', credits: 0, lp: 0, abbreviation: '' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-warmGray-900">My Modules</h2>
        <button
          onClick={() => setShowAddModule(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Module
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Book className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-warmGray-900">{module.name}</h3>
                  <p className="text-sm text-warmGray-500">{module.professor}</p>
                </div>
              </div>
              <div className="relative">
                <button className="p-2 hover:bg-warmGray-50 rounded-lg">
                  <MoreVertical className="h-5 w-5 text-warmGray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-warmGray-500">Semester</span>
                <span className="font-medium text-warmGray-700">{module.semester}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-warmGray-500">Credits (SWS)</span>
                <span className="font-medium text-warmGray-700">{module.credits} CP</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-warmGray-500">LP</span>
                <span className="font-medium text-warmGray-700">{module.lp} LP</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-warmGray-500">Progress</span>
                  <span className="font-medium text-warmGray-700">{module.progress}%</span>
                </div>
                <div className="h-2 bg-warmGray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-500 rounded-full"
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddModule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-warmGray-900 mb-4">Add New Module</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Module Name
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={newModule.name}
                  onChange={(e) => setNewModule({ ...newModule, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Abbreviation
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={newModule.abbreviation}
                  onChange={(e) => setNewModule({ ...newModule, abbreviation: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Professor
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={newModule.professor}
                  onChange={(e) => setNewModule({ ...newModule, professor: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Semester
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={newModule.semester}
                  onChange={(e) => setNewModule({ ...newModule, semester: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Credits (SWS)
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={newModule.credits}
                  onChange={(e) =>
                    setNewModule({ ...newModule, credits: parseInt(e.target.value) || 0 })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  LP
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={newModule.lp}
                  onChange={(e) =>
                    setNewModule({ ...newModule, lp: parseInt(e.target.value) || 0 })
                  }
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowAddModule(false)}
                className="px-4 py-2 text-warmGray-600 hover:bg-warmGray-50 rounded-lg"
              >
                Cancel
              </button>
              <button onClick={handleAddModule} className="btn-primary">
                Add Module
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modules;