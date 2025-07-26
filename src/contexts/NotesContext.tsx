'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface Note {
  id: string
  title: string
  content: string
}

interface NotesContextType {
  notes: Note[]
  addNote: (note: Omit<Note, 'id'>) => void
  deleteNote: (id: string) => void
}

const NotesContext = createContext<NotesContextType | undefined>(undefined)

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([])

  const addNote = (noteData: Omit<Note, 'id'>) => {
    const newNote = { ...noteData, id: Date.now().toString() }
    setNotes(prev => [...prev, newNote])
  }

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes() {
  const context = useContext(NotesContext)
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider')
  }
  return context
}