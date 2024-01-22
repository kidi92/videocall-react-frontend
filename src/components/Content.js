import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import useSWR from "swr";
import ComplaintComponent from "./Complaint";
import HistoryComponent from "./History";

function ContentComponents() {
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/callstatus");
    return response.data;
  };

  const { data } = useSWR("call", fetcher);
  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="id">
      <div>
        <Row className="rows">
          <Col>
            <Row>
              <Col>
                <div className="admin">
                  Admin
                  <Container className="camera1">Camera</Container>
                </div>
              </Col>
              <Col>
                <Container className="admin">
                  Client
                  <Container className="camera1">Camera</Container>
                </Container>
              </Col>
            </Row>
            <div className="textarea">
              <ComplaintComponent />
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <div className="calltitle">
                  Incoming Call
                  <Container className="call">
                    <Container className="tabelw">
                      <table>
                        <thead classname="">
                          <tr>
                            <th className="thead">Name</th>
                            <th className="thead">Category</th>
                            <th className="thead">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((call, index) => (
                            <tr>
                              <td className="trku">{call.nama}</td>
                              <td className="trku">{call.kategori}</td>
                              <td className="">
                                <button className="join">Join</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Container>
                  </Container>
                </div>
              </Col>
            </Row>
            <div className="historytitle">
              <HistoryComponent />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContentComponents;
