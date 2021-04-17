import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {

    const {serviceTitle, price, imageURL, _id} = service;
    
    let history = useHistory()

    const handleOrder = (_id)=> {
        history.push(`/makeOrder/${_id}`)
    }

    return (
        <div className="col-md-3">
            <div class="card" onClick={()=>handleOrder(`${_id}`)}>
                <img src={imageURL} class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <h3 class="card-text">{serviceTitle}</h3>
                    <p class="card-text text-warning fw-bold">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;