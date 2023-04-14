import { Col, Container, Row } from "react-bootstrap";

const Track = ({ track }) => {
  return (
    <Container fluid id="trackCnt">
      <Row>
        <Col className="text-light">
          <p className="fw-bold">{track.title}</p>
        </Col>
        <Col>
          <p className="text-light ms-5">{track.artist.name}</p>
        </Col>
        <Col>
          <p className="text-light ms-5">
            {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Track;
