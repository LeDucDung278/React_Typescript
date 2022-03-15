import React from 'react'
import { Product } from '../types/product'

type ShowinfoProps = {
    person: Product
}

const Showinfo = (props: ShowinfoProps) => {
    console.log(props)
  return (
    <div>Showinfo</div>
  )
}

export default Showinfo