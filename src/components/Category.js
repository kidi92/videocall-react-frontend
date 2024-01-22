import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";


function Category() {
  const navigate = useNavigate()
  const [nama, setName] = useState("");
  const [kategori, setKategori] = useState("");

  const createCall = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/createcall", {
      nama: "BL Gate 9",
      kategori: kategori,
      status: true,
      room: "sdsjfkfgd",
    });
    navigate("/waiting");
  };

  return (
    <div class="category" id="category">
      <form onSubmit={createCall}>
        <input type="radio" id="cat_1" name="cat_radio" value="Flights" onChange={(e) => setKategori(e.target.value)}></input>
        <input type="radio" id="cat_2" name="cat_radio" value="Baggage" onChange={(e) => setKategori(e.target.value)}></input>
        <input type="radio" id="cat_3" name="cat_radio" value="Places" onChange={(e) => setKategori(e.target.value)}></input>
        <input type="radio" id="cat_4" name="cat_radio" value="Facilities" onChange={(e) => setKategori(e.target.value)}></input>
        <input type="radio" id="cat_5" name="cat_radio" value="Others" onChange={(e) => setKategori(e.target.value)}></input>
        <button id="cat-btn" type="submit">
          Lets Talk
        </button>
      </form>
    </div>
  );
}

export default Category;
