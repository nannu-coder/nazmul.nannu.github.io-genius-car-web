import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [item, setItem] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h2>{item.name}</h2>
        </div>
    );
};

export default Booking;