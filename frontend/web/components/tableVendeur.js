import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function table() {
    const [vendeurs, setVendeurs] = useState([])

    const data = async () => {
        await axios.get('http://172.26.48.1:5000/api/vendeur/get-all-vendeur')
            .then((value) => {
                setVendeurs(value.data.get_all_Vendeur)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        data()
    }, [vendeurs])

    return (
        <div className=" table-responsive">
            <table className="container mx-auto table">
                <thead>
                    <tr className="bg-gray text-center">
                        <th scope="col" className='col-2'>#</th>
                        <th scope="col" className='col-3'>Name</th>
                        <th scope="col" className='col-4'>Email</th>
                        <th scope="col" className='col-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vendeurs.map((e, i) => (
                            <tr key={e._id} className='text-center'>
                                <th scope="row">{i + 1}</th>
                                <td>{e.username}</td>
                                <td>{e.email}</td>
                                <td className="px-3 d-flex justify-content-around ">
                                    {e.status
                                        ? <i className="bi bi-trash2-fill h5"></i>
                                        : <i className="bi bi-arrow-clockwise h5"></i>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
