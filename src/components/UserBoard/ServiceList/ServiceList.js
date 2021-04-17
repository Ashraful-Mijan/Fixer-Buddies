import React, { useEffect, useState } from 'react';

const ServiceList = () => {
    const [orders, setOrders] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/getOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='p-5'>
            <table class="table table-hover">
                <thead>
                    <tr className="bg-dark text-light">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => {
                            return <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.serviceTitle}</td>
                                <td>Status</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServiceList;