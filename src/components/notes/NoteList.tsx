'use client'

import { useNotes } from '@/contexts/NotesContext'
import NoteItem from './NoteItem'

export default function NoteList() {
  const { notes } = useNotes()

  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} id={note.id} title={note.title} content={note.content} />
      ))}
    </div>
  )
}