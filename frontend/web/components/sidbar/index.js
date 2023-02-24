import React from "react"
import colors from '../../assets/styles/colors'

export default function SidBar() {
    const menu = [
        { name: 'Home', nav: 'statistique', icon: 'bi bi-house-door-fill h5' },
        { name: 'Livreurs', nav: 'livreurList', icon: 'bi bi-person-circle h5' },
        { name: 'Vendeurs', nav: 'vendeurList', icon: 'bi bi-person-circle h5' },
        { name: 'Products', nav: 'productList', icon: 'bi bi-shop h5' },
        { name: 'Categories', nav: 'categorieList', icon: 'bi bi-bookmark-fill h5' },
    ]

    React.useEffect(() => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        if (!token && !user) window.location.href = '/'
    }, [])

    const Logout = async () => {
        await localStorage.removeItem('token')
        await localStorage.removeItem('user')
        window.location.href = '/'
    }

    return (
        <div className='col-2 m-3 rounded-3 shadow-lg' style={{ background: colors.white }}>
            <div className='text-center py-3'>Grocery Delivery</div>
            <div className='d-flex justify-content-center align-items-center'>
                <hr style={{ width: '75%', height: 8, color: colors.black }} />
            </div>
            <ul className="nav nav-pills nav-flush flex-column gap-5 mb-auto text-center">
                {menu.map((item, i) => (
                    <li className="nav-item" key={i}>
                        <a href={item.nav} className="nav-link" style={{ color: colors.black }}>
                            <i className={item.icon} />
                            <i className='ms-3'>{item.name}</i>
                        </a>
                    </li>
                ))}
                <li className="nav-item">
                    <div type='button' onClick={Logout} className="nav-link" style={{ color: colors.black }}>
                        <i className='bi bi-box-arrow-right h5' />
                        <i className='ms-3'>Logout</i>
                    </div>
                </li>
            </ul>
        </div>
    )
}