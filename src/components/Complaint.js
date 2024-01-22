import { Button, Col, Container, Row } from "react-bootstrap";

function ComplaintComponent() {
    return (
      <div className="historytitle">
              Input Suggestion
              <Container className="area">
                <textarea className="inputtext">Tulis Disini</textarea>
              </Container>
              <Container className="buttonops">
                <Button className="button">Insert</Button>
              </Container>
  </div>
  
  )
}

export default ComplaintComponent;
