import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newAdmin = {
            email: data.email
        }

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAdmin)
        })
        .then(res => {
            if(res) {
                alert('Admin Created successfully');
            }
        })
    };

    return (
        <div className='p-3 w-100 h-100' >
            <form onSubmit={handleSubmit(onSubmit)} className='w-75 mx-auto p-5 rounded text-light fw-bold' style={{ backgroundColor: '#1D3548' }}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" placeholder="johndue5@email.com" name="email" class="form-control" ref={register} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;