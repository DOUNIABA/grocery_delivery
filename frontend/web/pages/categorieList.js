import Link from "next/link";
import React, { useState } from "react";
import SidBar from "../components/sidbar/index";
import Form from "../components/categorie/formCategorie";
import Table from "../components/categorie/tableCategorie";

export default function categorieList() {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(visible ? false : true);
  };

  return (
    <main className="w-100 vh-100 d-flex">
      <SidBar />
      <div className="w-100 vh-100 p-5">
        <h1 className="text-xl text-start font-bold">Categorie List</h1>
        <div className="d-flex container flex justify-between d-flex align-items-center">
          <div className="left flex gap-3">
            <button
              onClick={handler}
              className="btn btn-outline-warning flex px-4 py-2 border rounded-md"
            >
              Add Categorie
            </button>
          </div>
          <div className="mx-5">{visible ? <Form></Form> : <></>}</div>
          <hr></hr>
        </div>
        <div className="container mx-auto">
          <Table></Table>
        </div>
      </div>
    </main>
  );
}
