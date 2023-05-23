// import Image from 'next/image'
import { Manrope } from 'next/font/google'

import ProductItem from '../../components/ProductItem'
import { client } from '../../utils/client'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home({products}) {
  return (
    <main className={`min-h-screen ${manrope.className}`}>
      <h2>All Products</h2>
        <section className='grid grid-cols-3 gap2'>
          {
            products.map((product, idx) => (
              <ProductItem key={idx} product={product}/>
            ))
          }
        </section>
    </main>
    )
  }


export const getServerSideProps = async ()=>{
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  
  return {
    props:{products}
  }
}