import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { albumAction } from "../redux/actions";
import Track from "./Track";

const MainAlbum = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const albumUrl = `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`;
  useEffect(() => {
    dispatch(albumAction(albumUrl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const album = useSelector(state => state.album.album);
  console.log(album);
  return (
    <>
      <Row className="mb-3">
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>
      {album !== null && (
        <Row>
          <Col md={3} className="pt-5 text-center" id="img-container">
            <img src={album.cover_medium} alt="Cover" />
          </Col>
          <Col md={8} className="p-5">
            <Row>
              {album.tracks.data.map(track => (
                <Col key={track.id} md={10} className="mb-5" id="trackList">
                  <Track track={track} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default MainAlbum;
