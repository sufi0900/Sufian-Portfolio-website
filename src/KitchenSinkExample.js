import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./css/imagehover.min.css";
// import "./css/imagehover.css";
// import "./css/imagehover.css.map";
import { Link } from "react-router-dom";
// import "./css/imagehover.min.css";
function KitchenSinkExample() {
  return (
    <>
      <Card>
        <figure class="imghvr-zoom-out-up">
          <Card.Img variant="top" src={require("./1.jpg")} />

          <figcaption>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. // Hover Content
            <Card.Img variant="top" src={require("./1.jpg")} />
          </figcaption>
        </figure>

        <Card.Body>
          <Card.Title>
            Card Title
            <br></br>
            <h3>University Website</h3>
          </Card.Title>
          {/* <figure
          class="imghvr-zoom-out-flip-vert"
          style={{ background: "white", color: "black" }}
        >
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <figcaption>// Hover Content</figcaption>
        </figure> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Cras justo odio
            <br></br>
            <Card.Link>
              <Link to="/Projects/projectdetail"> Read more..</Link>
            </Card.Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default KitchenSinkExample;
