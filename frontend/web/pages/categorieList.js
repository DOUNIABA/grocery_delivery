import Link from "next/link"
import React, { useState } from "react"
import {BiEdit} from "react-icons/bi"
import Form from "@/components/formCategorie"
import Table from "@/components/tableCategorie"
import colors from "@/styles/colors"

export default function categorieList() {
const [visible,setVisible]= useState(false)

const handler = () =>{
    setVisible(visible ? false : true)

}

    return (
    <main className='py-3'>
        <h1 className="text-xl text-start font-bold px-5">Categorie List</h1>
        <div className='d-flex container flex justify-between py-5 '>
            <div className="left flex gap-3">
                <button onClick={handler} className="btn btn-outline-warning flex px-4 py-2 border rounded-md" color={colors.color1}>Add Categorie</button>
            </div>
            <div className="mx-5">
            {visible? <Form></Form> : <></>}
        </div>
            
        <hr></hr>
            
        </div>
        

        <div className="container mx-auto">
            <Table></Table>
        </div>


    </main>
  )
  
}

