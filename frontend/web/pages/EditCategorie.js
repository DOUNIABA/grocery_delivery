import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Router from 'next/router';
import SidBar from "../components/sidbar/index";


export default function EditCategorie() {
  const [Data, setData] = useState([]);

  const data = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    await axios
      .get(`http://localhost:5000/api/categorie/get-one-categorie/${id}`)
      .then((value) => {
        setData(value.data.categorie);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    data();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");

    const categ = await axios.put(`http://localhost:5000/api/categorie/Edit-categorie/${id}`,Data);
    if (categ) {
      Router.push("/categorieList");
    }
  
  };

  const onChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <main className="d-flex">
      <SidBar />
    <div className="container align-items-center justify-content-center w-50 vh-100 my-5 px-5 ">
         <form className=" shadow-lg px-5 py-5 mt-5" onSubmit={handleSubmit}>
  <div class="mb-3">
    <label class="form-label">categorie</label>
    <input
              type="text"
              name="name"
              className="form-control"
              onChange={onChange}
              value={Data.name} />
              </div>
 
  <button type="submit" className="btn btn-warning text-ligh py-2 border rounded-md"> Save
       </button>
    </form>
    </div>
    </main>

  );
}
