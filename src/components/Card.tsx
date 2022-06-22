interface Bla {
  name: string;
  url: string;
}

export default function Card({ name, url }: Bla) {
  return (
    <div>
      <img src={url} alt={name} width="400px" />
    </div>
  );
}
