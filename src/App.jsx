import React, { useEffect, useMemo, useState } from "react";
import politicians from "./db.js";

function PoliticsCards({ name, role, image, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{role}</h4>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  );
}

const PoliticsCardsMemo = React.memo(PoliticsCards);

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
        <PoliticsCardsMemo key={p.id} {...p} />
      ))}
    </>
  );
}

export default App;
