import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ManageSingleService = ({ manage }) => {
    const { serviceTitle, description, price, _id } = manage;

    const deleteService = (id, e) => {
        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.parentNode.parentNode.remove()
                    alert('Are You Agree for Delete This Service ?') 
                    console.log(e.target.parentNode.parentNode)  
                }
                
            })

    }
    return (
        <tr>
            <td>{serviceTitle}</td>
            <td>{description}</td>
            <td>${price}</td>
            <td><button onClick={(e)=> deleteService(_id,e)}>Delete</button></td>
        </tr>
    );
};

export default ManageSingleService;