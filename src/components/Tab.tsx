import "./Tab.css";
import { useParams } from "react-router-dom";
import Card from "./Card";

import data from "../walls.json";

export default function Tab() {
  const params = useParams();
  console.log(params.id);
  const name = data[Number(params.id) - 1].name;
  const walls = data[Number(params.id) - 1].walls;

  console.log("TAB RENDERED");

  return (
    <div className="tab">
      <h1 className="tab-title">{name}</h1>
      <div className="card-container">
        {walls.map((wall) => (
          <Card name={wall.name} urlhd={wall.urlhd} url4k={wall.url4k} />
        ))}
      </div>
    </div>
  );
}
