import { useParams } from "react-router-dom";
import Card from "./components/Card";

import data from "./walls.json";

export default function Tab() {
  const params = useParams();
  console.log(params.id);
  const name = data[Number(params.id) - 1].name;
  const walls = data[Number(params.id) - 1].walls;

  console.log("TAB RENDERED");

  return (
    <div>
      <h1>{name}</h1>
      <div>
        {walls.map((wall) => (
          <Card name={wall.name} url={wall.url} />
        ))}
      </div>
    </div>
  );
}
