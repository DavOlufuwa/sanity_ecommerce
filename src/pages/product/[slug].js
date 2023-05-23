import Image from 'next/image'
import React from 'react'
import { client, urlFor } from '../../../utils/client'

const  ProductScreen = ({product}) => {
  const {name, image, description, category, brand,  rating, price, numReviews, countInStock} = product

  return (
    <div className='p-10 min-h-screen'>
      <section>
        <Image
          src={urlFor(image).url()}
          alt={description}
          width={300}
          height={300}
        />
        <div>
          <h2>{name}</h2>
        </div>

        <div>
          <p>CATEGORY:</p>
          <p>{category}</p>
        </div>
        <div>
          <p>BRAND</p>
          <p>{brand}</p>
        </div>
        <div>
          <p>DESCRIPTION:</p>
          <p>{description}</p>
        </div>
        <div>
          <p>REVIEWS</p>
          <p>{numReviews}+ Reviews</p>
        </div>
        <div>
          {countInStock > 0 ? `${countInStock} left In Stock` : `Product is Unavailable`}
        </div>
        <section>
          <div>$ {price}</div>
          <button className='bg-red-400 p-2 rounded-sm text-white'>Add to Cart</button>
        </section>
      </section>
    </div>
  )
}

export default  ProductScreen

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {slug {current}}` 
  const products = await client.fetch(query) 

  const slugPath = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths:slugPath,
    fallback:false
  }
}

export const getStaticProps = async ({params:{slug}})=>{
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`
  const product = await client.fetch(query)

  return {
    props: {product}
  }
}