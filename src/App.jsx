import { useEffect, useState } from "react";
import politicians from "./db.js";

function App() {
  const [politics, setPolitics] = useState([]);

  useEffect(() => {
    setPolitics(politicians);
  }, []);

  return (
    <>
      <h1>Lista Politici</h1>
      {politics.map((p) => (
        <div>
          <h3>{p.name}</h3>
          <h4>{p.role}</h4>
          <p>{p.description}</p>
          <img src={p.image} alt={p.name} />
        </div>
      ))}
    </>
  );
}

export default App;
