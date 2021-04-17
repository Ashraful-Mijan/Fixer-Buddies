import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const serviceData = {
            serviceTitle: data.serviceTitle,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        }

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
    };

    const imageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '1700808f047b1d6d5c6058f995df69ed');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='p-3 w-100 h-100' >
            <form onSubmit={handleSubmit(onSubmit)} className='w-75 mx-auto p-5 rounded text-light fw-bold' style={{ backgroundColor: '#1D3548' }}>
                <div class="mb-3">
                    <label for="serviceTitle" class="form-label">Service Title</label>
                    <input type="text" name='serviceTitle' class="form-control" ref={register} />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" name="description" class="form-control" ref={register} />
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="text" name="price" class="form-control" ref={register} />
                </div>
                <div class="mb-3">
                    <label for="icon" class="form-label">Icon</label>
                    <input onChange={imageUpload} type="file" name="icon" class="form-control" />
                </div>
                <button type="submit" class={`btn btn-primary ${imageURL ? '' : 'disabled'}`}>Submit</button>
            </form>
        </div>
    );
};

export default AddService;