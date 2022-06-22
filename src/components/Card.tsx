import "./Card.css";

interface ICard {
  name: string;
  url: string;
}

export default function Card({ name, url }: ICard) {
  return (
    <div className="card">
      <img src={url} alt={name} />
      <div className="card-info">
        <span className="wallpaper-title">{name}</span>
        <a className="download-btn" href={url} download>
          1080p
        </a>
        <a className="download-btn" href={url} download>
          4k
        </a>
      </div>
    </div>
  );
}
