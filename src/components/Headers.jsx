export default function Header({ title }) {
  return <h1 className="header">{title}</h1>;
}

export function SubHeader({ title }) {
  return <h2 className="song-list-header">{title}</h2>;
}
