import "./Home.css";

const fwall = {
  name: "",
  urlhd:
    "https://raw.githubusercontent.com/aynp/dracula-wallpapers/main/OS/Arch%20Linux%20(Logo%20Rainbow).png",
  url4k:
    "https://raw.githubusercontent.com/aynp/dracula-wallpapers/main/OS/4k/Arch%20Linux%20(Logo%20Rainbow).png",
};

export default function Home() {
  return (
    <div className="featured-wall">
      <div className="home-title">Featured Wall</div>
      <div className="image-container">
        <img src={fwall.urlhd} alt="Featured Wallpaper" />
      </div>
      <div className="featured-dl-container">
        <a href={fwall.urlhd} className="featured-dl">
          Download HD
        </a>
        <a href={fwall.url4k} className="featured-dl">
          Download 4K
        </a>
      </div>
    </div>
  );
}
