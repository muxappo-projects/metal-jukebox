import Header, { SubHeader } from "./components/Headers.jsx";
import Songs, { SongPreview } from "./components/Songs.jsx";
import IncreaseBalance from "./components/Buttons.jsx";

const App = () => {
  const balance = 0;
  const playListTitle = "Headbangers Jukebox";
  const songListTitle = "Available tracks";
  const songs = [
    {
      id: 1,
      title: "Coming of the Tide",
      album: "Deceiver of the Gods",
      artist: "Amon Amarth",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/2/2f/DeceiveroftheGodsAmonAmarth.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/5lxwA7AdXjESdJx3gmQdVT?utm_source=generator",
    },
    {
      id: 2,
      title: "Together We Rise",
      album: "Warfront",
      artist: "Wind Rose",
      albumCover:
        "https://m.media-amazon.com/images/I/81Hpza0UR4L._UF894,1000_QL80_.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/1OMplIvNpCVCYirUTXF07d?utm_source=generator",
    },
    {
      id: 3,
      title: "Chomp Chomp",
      album: "Curse of the Crystal Coconut",
      artist: "Alestorm",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/7/70/Alestorm_Curse_of_the_Crystal_Coconut_Cover_Art_2020.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/0YkxwqZXz8kUyDfobm7K4F?utm_source=generator",
    },
    {
      id: 4,
      title: "Deathwalker",
      album: "Ategnatos",
      artist: "Eluveitie",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/a/ad/Eluveitie_-_Ategnatos_2019.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/6axXEeY3z8blSGSvfTgGFq?utm_source=generator",
    },
  ];
  const playCounts = {
    "Coming of the Tide": 10,
    "Chomp Chomp": 5,
    Deathwalker: 8,
    "Together We Rise": 11,
  };
  const totalPlays = Object.values(playCounts).reduce(
    (accum, currVal) => accum + currVal
  );
  const currentlyPlaying = "Coming of the Tide";

  return (
    <div className="App">
      <Header title={playListTitle} />
      <SongPreview songTitle={currentlyPlaying} songList={songs} />

      <IncreaseBalance coinBalance={balance} />

      <SubHeader title={songListTitle} />
      <Songs
        songs={songs}
        currentSong={currentlyPlaying}
        plays={playCounts}
        total={totalPlays}
      />
    </div>
  );
};

export { App, Header };
