import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleChangeTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../../js/particlesItInit.js";
    script.defer = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <div id="particles-js"></div>

      <Home setIsDark={handleChangeTheme} isDark={isDark} />
    </div>
  );
}

export default App;
