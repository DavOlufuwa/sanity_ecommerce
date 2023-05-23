import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../utils/client'

const ProductItem = ({product:{name, image, slug, description, price, rating}}) => {
  return (
    <div className='p-1 shadow-md'>
      <Link href={`/product/${slug.current}`}>
        <Image 
          src={urlFor(image).url()}
          alt={description}
          title={name}
          width={200}
          height={200}
        />
        <section>
          <h3 className='font-extrabold'>{name}</h3>
          <p className='text-sm'>{description}</p>
        </section>
        <section>
          <div>$ {price}</div>
          <button className='bg-red-400 p-2 rounded-sm text-white'>Add to Cart</button>
        </section>
      </Link>
    </div>
  )
}

export default ProductItem