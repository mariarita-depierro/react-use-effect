import { useState } from "react";
import NotepadSection from "../sections/NotepadSection";
import ThemeToggleSection from "../sections/ThemeToggleSection";

export default function Main() {
  const [isVisible] = useState(true);

  return (
    <main className="container">
      <div className="row g-3">
        {/* <!-- Prima riga --> */}
        <div className="col-md-4">
          <NotepadSection />
        </div>
        {/* Conditional rendering per la visibilità del componente */}
        {isVisible && (
          <div className="col-md-4">
            <ThemeToggleSection />
          </div>
        )}
        <div className="col-md-4">Ex.3</div>
      </div>
    </main>
  );
}

/* Esercizio 3 – Window size tracker

Creare un componente WindowSize che mostra in tempo reale larghezza e altezza della finestra.
Stato inizializzato con window.innerWidth e window.innerHeight.
useEffect che registra un listener sull'evento resize.
Mostrare anche un badge con il breakpoint corrente: mobile (< 768px), tablet (< 992px), desktop.
Cleanup con removeEventListener: la funzione handler deve quindi essere dichiarata con un nome, non anonima. */
