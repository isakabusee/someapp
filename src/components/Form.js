import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
    const {register, handleSubmit, watch, formState: {errors} } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input type="text" placeholder="email" {...register("email required", {required: true })} />
            <input type="text" placeholder="Name" {...register("name required", {required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
    )
}
export default Form;