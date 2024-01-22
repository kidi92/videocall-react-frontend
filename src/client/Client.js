import { useNavigate } from "react-router-dom";

function Client() {
  const navigate = useNavigate()
  return (
    <div>
      <div class="infobox" id="infobox">
        <button id="cta-btn" onClick={() => navigate('/category')}>Lets Talk</button>
        
      </div>
      
    </div>
  );
}

export default Client;
