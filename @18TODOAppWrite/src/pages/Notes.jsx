import { useEffect, useState } from 'react';
import db from '../appwrite/databases';
import NoteForm from '../components/NoteForm.jsx';
import Note from '../components/Note.jsx'
import { Query } from 'appwrite';

function Notes() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    // const response = await databases.listDocuments(
    //     String(import.meta.env.VITE_DATABASE_ID),
    //     String(import.meta.env.VITE_COLLECTION_ID_NOTES)
    // );

    const response = await db.notes.list([
      Query.orderDesc("$createdAt")
    ]);
    setNotes(response.documents);

  };



  return <>
    <div>
      <h1>✍️ My Todo List</h1>
    </div>
    <NoteForm setNotes={setNotes} />

    {notes.map((note) => (
      <Note key={note.$id} setNotes={setNotes} noteData={note} />
    ))}

  </>
}

export default Notes