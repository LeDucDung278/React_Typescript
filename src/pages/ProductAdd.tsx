import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form"

type Inputs = {
    name: string,
    price:number,
}

type ProductAddProps = {
    name: string,
    onAdd: (product: Inputs) =>void
}

type Props = {}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState:{ errors}} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) =>{
        console.log(dataInput);
        props.onAdd(dataInput)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name')} placeholder='Tên sp' />
            <input type="number" {...register('price')} placeholder='giá sản phẩm' />
            <button>Thêm</button>
        </form>
    </div>
  )
}

export default ProductAdd