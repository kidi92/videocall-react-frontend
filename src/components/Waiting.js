import { useNavigate } from "react-router-dom";

function Waiting() {
    const navigate = useNavigate()
  return (
    <div>
      <div class="camerabox" id="camerabox">
      <button id="exit-btn" onClick={() => navigate('/client')}>X</button>
    </div>
    </div>
  );
}

export default Waiting;
