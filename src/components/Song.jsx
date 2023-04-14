import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Song = ({ song }) => {
  return (
    <>
      <Link to={`/album/${song.album.id}`}>
        <Image fluid src={song.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link className="fs-6 link" to={`/album/${song.album.id}`}>
          {song.album.title} <br />
        </Link>
        <Link className="link" to={`/artist/${song.artist.id}`}>
          {song.artist.name}
        </Link>
      </p>
    </>
  );
};

export default Song;
