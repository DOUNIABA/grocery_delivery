import React, { useState } from "react"
import Form from "../components/vendeur/formVenduer"
import Table from "../components/vendeur/tableVendeur"
import colors from "@/assets/styles/colors"

export default function vendeurList() {
    const [visible, setVisible] = useState(false)
    const handler = () => {
        setVisible(visible ? false : true)
    }

    return (
        <main className='m-4 d-flex flex-column gap-3'>
            <h1 className="text-xl text-start font-bold">Vendeur List</h1>
            <div className='d-flex container flex justify-between d-flex align-items-center'>
                <div className="left flex gap-3">
                    <button onClick={handler} className="btn btn-outline-warning gap-2 px-4 py-2 border rounded-md" color={colors.color1}>
                        <div>{
                            visible
                                ? <i className="bi bi-x-circle-fill"></i>
                                : <i className="bi bi-plus-square-fill"></i>
                        }</div>
                    </button>
                </div>
                <div className="mx-5">
                    {visible ? <Form></Form> : <>Add Venduer</>}
                </div>
                <hr></hr>
            </div>
            <div className="container mx-auto">
                <Table></Table>
            </div>
        </main>
    )
}