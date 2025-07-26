'use client'

import { useState } from 'react'
import { useNotes } from '@/contexts/NotesContext'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function AddNoteForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addNote } = useNotes()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && content) {
      addNote({ title, content })
      setTitle('')
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="mb-2"
      />
      <Input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="mb-2"
      />
      <Button type="submit" variant="primary">
        Add Note
      </Button>
    </form>
  )
}