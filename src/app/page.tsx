import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import NoteList from '@/components/notes/NoteList'
import AddNoteForm from '@/components/notes/AddNoteForm'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">My Notes</h1>
        <AddNoteForm />
        <NoteList />
      </main>
      <Footer />
    </div>
  )
}