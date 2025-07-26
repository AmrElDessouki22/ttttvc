'use client'

import { useNotes } from '@/contexts/NotesContext'
import Button from '@/components/ui/Button'

interface NoteItemProps {
  id: string;
  title: string;
  content: string;
}

export default function NoteItem({ id, title, content }: NoteItemProps) {
  const { deleteNote } = useNotes()

  return (
    <div className="border p-4 mb-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <Button variant="secondary" onClick={() => deleteNote(id)} className="mt-2">
        Delete
      </Button>
    </div>
  )
}