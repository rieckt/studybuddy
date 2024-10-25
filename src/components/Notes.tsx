import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Upload, Plus, Folder, Search, X } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  module?: string;
  lastModified: Date;
  type: 'note' | 'pdf';
  url?: string;
}

function Notes() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Mathematics III - Linear Algebra',
      content: 'Key concepts of linear algebra and matrix operations...',
      module: 'Mathematics III',
      lastModified: new Date(2024, 2, 10),
      type: 'note',
    },
    {
      id: '2',
      title: 'Physics Lecture Notes.pdf',
      content: '',
      module: 'Physics II',
      lastModified: new Date(2024, 2, 15),
      type: 'pdf',
      url: 'https://example.com/physics-notes.pdf',
    },
  ]);

  const [showNewNote, setShowNewNote] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '', module: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const newPdfNote: Note = {
          id: Date.now().toString(),
          title: file.name,
          content: '',
          lastModified: new Date(),
          type: 'pdf',
          url: URL.createObjectURL(file),
        };
        setNotes((prev) => [...prev, newPdfNote]);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
  });

  const handleAddNote = () => {
    if (newNote.title && newNote.content) {
      const note: Note = {
        id: Date.now().toString(),
        title: newNote.title,
        content: newNote.content,
        module: newNote.module,
        lastModified: new Date(),
        type: 'note',
      };
      setNotes((prev) => [...prev, note]);
      setShowNewNote(false);
      setNewNote({ title: '', content: '', module: '' });
    }
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (note.content && note.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-warmGray-900">Notes & Documents</h2>
        <button
          onClick={() => setShowNewNote(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          New Note
        </button>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-warmGray-200">
        <Search className="h-5 w-5 text-warmGray-400" />
        <input
          type="text"
          placeholder="Search notes..."
          className="flex-1 bg-transparent border-none focus:ring-0 text-warmGray-900 placeholder-warmGray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div {...getRootProps()} className="cursor-pointer">
        <input {...getInputProps()} />
        <div className={`border-2 border-dashed rounded-xl p-8 text-center ${
          isDragActive ? 'border-primary-500 bg-primary-50' : 'border-warmGray-200'
        }`}>
          <Upload className="h-8 w-8 mx-auto mb-4 text-warmGray-400" />
          <p className="text-warmGray-600">
            {isDragActive
              ? 'Drop your PDF files here...'
              : 'Drag & drop PDF files here, or click to select'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-warmGray-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {note.type === 'pdf' ? (
                  <Folder className="h-6 w-6 text-primary-500" />
                ) : (
                  <FileText className="h-6 w-6 text-primary-500" />
                )}
                <div>
                  <h3 className="font-medium text-warmGray-900">{note.title}</h3>
                  {note.module && (
                    <p className="text-sm text-warmGray-500">{note.module}</p>
                  )}
                </div>
              </div>
            </div>
            {note.type === 'note' && (
              <p className="text-sm text-warmGray-600 line-clamp-3">{note.content}</p>
            )}
            <div className="mt-4 pt-4 border-t border-warmGray-100">
              <p className="text-xs text-warmGray-500">
                Last modified: {note.lastModified.toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {showNewNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-warmGray-900">Create New Note</h3>
              <button
                onClick={() => setShowNewNote(false)}
                className="p-2 hover:bg-warmGray-50 rounded-lg"
              >
                <X className="h-5 w-5 text-warmGray-500" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Module (Optional)
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={newNote.module}
                  onChange={(e) => setNewNote({ ...newNote, module: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Content
                </label>
                <textarea
                  className="input-field min-h-[200px]"
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowNewNote(false)}
                className="px-4 py-2 text-warmGray-600 hover:bg-warmGray-50 rounded-lg"
              >
                Cancel
              </button>
              <button onClick={handleAddNote} className="btn-primary">
                Create Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;