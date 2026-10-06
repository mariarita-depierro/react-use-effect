import { useState } from "react";
import NotepadSection from "../sections/NotepadSection";
import ThemeToggleSection from "../sections/ThemeToggleSection";
import WindowSizeSection from "../sections/WindowSizeSection";

export default function Main() {
  const [isVisible] = useState(true);

  return (
    <main className="container">
      <div className="row g-3">
        {/* Conditional rendering per la visibilità del componente */}
        {isVisible && (
          <>
            <div className="col-md-4">
              <NotepadSection />
            </div>

            <div className="col-md-4">
              <ThemeToggleSection />
            </div>

            <div className="col-md-4">
              <WindowSizeSection />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
