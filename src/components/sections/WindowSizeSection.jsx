/* Esercizio 3 – Window size tracker

Creare un componente WindowSize che mostra in tempo reale larghezza e altezza della finestra.
Stato inizializzato con window.innerWidth e window.innerHeight.
useEffect che registra un listener sull'evento resize.
Mostrare anche un badge con il breakpoint corrente: mobile (< 768px), tablet (< 992px), desktop.
Cleanup con removeEventListener: la funzione handler deve quindi essere dichiarata con un nome, non anonima. */

import { AppWindow } from "lucide-react";
import { useState, useEffect } from "react";

export default function WindowSizeSection() {
  const [windowDimensions, setWindowDimensions] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    //cleanaup function
    return () => {
      console.log("WindowSizeSection is mounted");
      window.removeEventListener("resize", handleResize);
      console.log("WindowSizeSection is unmounted");
    };
  }, []);

  const currentBreakpoint =
    windowDimensions.width < 768
      ? "Mobile"
      : windowDimensions.width < 992
        ? "Tablet"
        : "Desktop";

  return (
    <section className="window-size bg-warning p-4 text-black rounded">
      <h2>
        Window Size <AppWindow />
      </h2>
      <p>
        Dimensioni attuali della finestra:{" "}
        <span className="bg-white px-2 rounded">
          {windowDimensions.width}px (width) x {windowDimensions.height}px
          (height)
        </span>
      </p>
      <p>{currentBreakpoint}</p>
    </section>
  );
}
