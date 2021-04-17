import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { description, name, photo } = testimonial
    return (
        <div>
            <div className="col-md-3">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <p class="card-text text-center">{description}</p>
                        <span class="text-warning text-end d-block pe-3 fw-bold">{name}</span>
                    </div>
                    <img src={photo} class="card-img-top w-25 rounded-circle py-3 mx-auto" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;