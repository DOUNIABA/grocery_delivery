import React from 'react'
import axios from 'axios'
import colors from '../assets/styles/colors'
import SidBar from '../components/sidbar/index'

export default function StatistiqueAdmin() {

  const [statistique, setStatistique] = React.useState([])

  React.useEffect(() => {
    const fetchStatistique = async () => {
      const response = await axios.get('http://localhost:5000/api/statistique')

      setStatistique([
        { title: 'Clients', number: response.data.client },
        { title: 'Livreurs', number: response.data.client },
        { title: 'Vendeurs', number: response.data.vendeur },
        { title: 'Products', number: response.data.product },
        { title: 'Categories', number: response.data.categorie },
      ])
    }
    fetchStatistique()
  }, [statistique])

  return (
    <main className='w-100 vh-100 d-flex'>
      <SidBar />
      <div className='w-100 vh-100 p-5'>
        <div className='d-flex justify-content-center flex-wrap gap-5'>
          {statistique.map((item, i) => (
            <div className='col-5 shadow-lg p-3 text-uppercase fs-5' style={{ background: colors.white }} key={i}>
              <div className='d-flex justify-content-start'>{item.title}</div>
              <div className='d-flex justify-content-end'>{item.number}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
