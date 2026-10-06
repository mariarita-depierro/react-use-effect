/* Esercizio 1 – Blocco note persistente

Creare un componente NotePad con una <textarea>.
Il testo digitato viene salvato in localStorage a ogni modifica.
Al ricaricamento della pagina il testo viene recuperato da localStorage.
Sotto la textarea viene mostrato il numero di caratteri.
Il titolo della tab del browser mostra X caratteri.

Bonus: un pulsante "Svuota" che cancella testo e chiave dal localStorage.*/

import { NotebookPen } from "lucide-react";
import { useState, useEffect } from "react";

export default function NotepadSection() {
  const [note, setNote] = useState(() => {
    const savedNote = JSON.parse(localStorage.getItem("storage-note"));
    return savedNote ? savedNote : "";
  });

  useEffect(() => {
    document.title = `${note.length} caratteri`;

    note !== ""
      ? localStorage.setItem("storage-note", JSON.stringify(note))
      : localStorage.removeItem("storage-note");
  }, [note]);

  function handleInputChange(e) {
    setNote(e.target.value);
  }
  function handleReset() {
    setNote("");
  }

  return (
    <section className="bg-success p-4 text-white rounded">
      <h2>
        NotePad <NotebookPen size={25} />
      </h2>
      <textarea
        className="form-control"
        name="notepad"
        id="notepad"
        rows={5}
        value={note}
        onChange={handleInputChange}
        placeholder="Scrivi qui la tua nota..."
      ></textarea>
      <p className="mt-2 mb-2">Numero di caratteri: {note.length}</p>
      <button onClick={handleReset} className="btn btn-light" type="button">
        Svuota
      </button>
    </section>
  );
}
