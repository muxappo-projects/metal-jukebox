export default function Songs({ songs, currentSong, plays, total }) {
  return (
    <div>
      <ol className="song-list">
        {songs.map((song) => {
          return (
            <li className="song-item" key={song.id}>
              <h2>{song.title}</h2>
              <h3>{song.artist}</h3>
              <p>
                Album: <br />
                {song.album}
              </p>
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
      <p className="total-plays">Total songs played: {total}</p>
    </div>
  );
}

function PlayCounts({ song, plays }) {
  return <p>Played {plays[song]} times</p>;
}

export function SongPreview({ songTitle, songList }) {
  const songEmbed = songList.find((song) => song.title === songTitle);
  return (
    <section className="curr-song-container">
      <p className="song-current">Currently loaded:</p>
      <iframe
        title="song preview"
        className="preview"
        src={songEmbed.previewURL}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
}
