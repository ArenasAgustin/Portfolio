import { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "js/particles.min.js";
    script.async = true;
    script.type = "text/javascript";

    const script2 = script.cloneNode(true);
    script2.src = "js/particlesItInit.js";

    document.body.appendChild(script);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.appendChild(script2);
    };
  }, []);

  return (
    <div className="App">
      <div id="particles-js"></div>

      <Home />
    </div>
  );
}

export default App;
