import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getReview')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <section className="py-5">
            <div>
                <div className='text-center text-muted'>
                    <h2 className='fw-bold fs-1'>Testimonials</h2>
                    <hr className='text-center mx-auto' style={{ width: '40px', height: '6px', color: 'orange' }} />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sit.
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <div className="row pb-3">
                    {
                        testimonials.map(testimonial=> <Testimonial key={testimonial._id} testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;