const App = () => {
  const playListTitle = "Headbangers";
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
  const currentlyPlaying = "Together We Rise";

  return (
    <div className="App">
      <Header title={playListTitle} />
      <Songs songs={songs} currentSong={currentlyPlaying} plays={playCounts} />
    </div>
  );
};

// Create your new Components here
function Header({ title }) {
  return <h1>{title}</h1>;
}

function Songs({ songs, currentSong, plays }) {
  return (
    <div>
      <ol className="song-list">
        {songs.map((song) => {
          return (
            <li className="song-item" key={song.id}>
              <h2>{song.title}</h2>
              <h3>{song.artist}</h3>
              <p>{song.album}</p>
              <img
                className="song-img"
                src={song.albumCover}
                alt={`Album cover for ${song.album}`}
              />
              <PlayCounts song={song.title} plays={plays} />
            </li>
          );
        })}
      </ol>
      <p className="song-current">Currently playing: {currentSong}</p>
    </div>
  );
}

function PlayCounts({ song, plays }) {
  return <p>Total plays: {plays[song]}</p>;
}

export { App, Header };
