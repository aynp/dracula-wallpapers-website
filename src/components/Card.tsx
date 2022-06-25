import "./Card.css";

interface ICard {
  name: string;
  urlhd: string;
  url4k: string;
}

export default function Card({ name, urlhd, url4k }: ICard) {
  return (
    <div className="card">
      <img src={urlhd} alt={name} />
      <div className="card-info">
        <div className="wallpaper-title">{name}</div>
        <div className="download-btn-container">
          <a className="download-btn" href={urlhd} download>
            1080p
          </a>
          <a className="download-btn" href={url4k} download>
            4K
          </a>
        </div>
      </div>
    </div>
  );
}
