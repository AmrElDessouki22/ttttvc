import './globals.css'
import { NotesProvider } from '@/contexts/NotesContext'

export const metadata = {
  title: 'My Note App',
  description: 'A feature-rich note-taking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  )
}