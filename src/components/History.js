import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import useSWR from "swr";

function HistoryComponent() {
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/callhistory");
    return response.data;
  };

  const { data } = useSWR("history", fetcher);
  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="historytitle">
      History Call
      <Container className="call">
                    <Container className="tabelw">
        <table>
          <thead classname="">
            <tr>
              <th className="thead">Name</th>
              <th className="thead">Category</th>
              <th className="thead">Waktu</th>
            </tr>
          </thead>
          <tbody>
            {data.map((history, index) => (
              <tr>
                <td className="trku">{history.nama}</td>
                <td className="trku">{history.kategori}</td>
                <td className="trku">{history.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </Container>
      </Container>
    </div>
  );
}

export default HistoryComponent;
