import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function table() {
  const [categories, setCategories] = useState([]);

  const deleteCategorie = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/categorie/Remove-categorie/${id}`)
      .then((value) => {
        notify(value.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = async () => {
    await axios
      .get("http://localhost:5000/api/categorie/get-all-categorie")
      .then((value) => {
        // console.log(value.data.categories)
        setCategories(value.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    data();
  }, [categories]);

  return (
    <div className=" table-responsive">
      <table className="container mx-auto table">
        <thead>
          <tr className="bg-gray">
            <th scope="col" className="col-3">
              #
            </th>
            <th scope="col" className="col-6">
              Name
            </th>
            <th scope="col" className="col-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((e, i) => (
            <tr key={e._id}>
              <th scope="row">{i + 1}</th>
              <td>{e.name}</td>
              <td className="px-3 d-flex justify-content-around ">
                {e.status ? (
                  <i
                    type="button"
                    onClick={() => deleteCategorie(e._id)}
                    className="bi bi-trash2-fill h5"
                  ></i>
                ) : (
                  <i
                    type="button"
                    onClick={() => deleteCategorie(e._id)}
                    className="bi bi-arrow-clockwise h5"
                  ></i>
                )}
                <Link href={`/EditCategorie?id=${e._id}`}>
                  <button type="submit" className="btn btn-secondary">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}
