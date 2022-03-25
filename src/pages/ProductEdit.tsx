import React, { useEffect } from 'react'
import { SubmitHandler, useForm} from 'react-hook-form'
import {useParams, useNavigate} from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/product'

type Props = {}
type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>()
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() =>{
        const getProduct = async() => {
            const {data} =await read(id)
            reset (data)
        }
        getProduct()
    },[]);

    const onSubmit : SubmitHandler<FormInputs> = data =>{
        console.log(data)
        props.onUpdate(data)
        navigate("/admin/product")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', {required:true})} />
            <input type="number" {...register('price')} />
            <button>Update</button>
        </form>
    </div>
  )
}

export default ProductEdit