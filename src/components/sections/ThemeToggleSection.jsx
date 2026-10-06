/* Esercizio 2 – Theme switcher (light/dark)

Creare un componente ThemeToggle con un pulsante che alterna tema chiaro e scuro.
Lo stato theme viene salvato in localStorage e recuperato al caricamento.
Un useEffect applica una classe al document per light e dark mode
Il testo del pulsante cambia in base al tema attivo.

Bonus: gestire la visibilità del componente con conditional rendering e aggiungere una cleanup function di useEffect() che ripristina il tema light quando il componente viene smontato. Verificare il comportamento. */

import { SunMoon, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggleSection() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  //Gestione salvataggio tema dark/light in localstorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  //Gestione mounting/unmounting
  useEffect(() => {
    console.log("ThemeToggleSection is mounted!");

    //cleanup function
    return () => {
      console.log("ThemeToggleSection is unmounted!");
      localStorage.setItem("theme", "light");
    };
  }, []);

  function handleThemeToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  //derived states per background e text color in base al tema
  const textColor = theme === "dark" ? "text-white" : "text-dark";
  const btnColor = theme === "dark" ? " btn-light" : " btn-dark";
  const themeIcon = theme === "dark" ? <Moon size={16} /> : <Sun size={18} />;

  return (
    <section className={`bg-${theme} p-4 ${textColor} rounded `}>
      <h2>
        Theme Toggle <SunMoon size={35} />
      </h2>
      <button onClick={handleThemeToggle} className={`btn ${btnColor} `}>
        {theme} {themeIcon}
      </button>
    </section>
  );
}
