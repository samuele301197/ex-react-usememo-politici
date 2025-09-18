import { use, useEffect, useMemo, useState } from "react";
import politicians from "./db.js";

function App() {
  const [politics, setPolitics] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPolitics(politicians);
  }, []);

  const filteredPoliticians = useMemo(() => {
    return politics.filter((politic) => {
      const isInName = politic.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const isInDesc = politic.description
        .toLowerCase()
        .includes(search.toLowerCase());
      return isInName || isInDesc;
    });
  }, [politics, search]);

  return (
    <>
      <h1>Lista Politici</h1>
      <input
        type="text"
        placeholder="cerca un politico"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredPoliticians.map((p) => (
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
