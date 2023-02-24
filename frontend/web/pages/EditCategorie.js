import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditCategorie() {
    
      // const navigate = useNavigate();
  const [Data, setData] = useState([]);

  const { id } = useParams();

  const data  = async (id) => {
    await axios.get(`http://localhost:5000/api/categorie/get-one-categorie/${id}`)
    .then((value)=>{
      console.log(value.data.Data)
      // setCategories(value.data.categories)
  })
  .catch((err)=>{
      console.log(err)
  })
}

  useEffect(() => {
    data();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categ = await axios.put(`http://localhost:5000/api/categorie/Edit-categorie/${id}`,Data);
    if(categ.data) 
    console.log(categ.data)
    // navigate('/fomation/list');
  };

  const onChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <div className='w-100 mt-5'>
    <div className='d-flex justify-content-center align-item-center mt-5 '>
        <form className="form-container shadow " onSubmit={handleSubmit} >
          <div className="col-md-12">
            <span>Categorie</span>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={onChange}
              value={Data.name}
            />
          </div>
          <button type="submit" data-testid="submit" className="">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

