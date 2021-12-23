import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(data);
                if (res.data.insertedId) {
                    alert('success')
                    reset();
                }
            })
    }

    return (
        <div>
            <h1>Please Add a Services</h1>

            <form className='input_form' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea {...register("description")} placeholder='Description' />
                <input type="number" {...register("price")} placeholder='price' />
                <input {...register("img")} placeholder='img URL' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;