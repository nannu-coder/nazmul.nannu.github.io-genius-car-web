import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/services/'
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const deleteService = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('SuccessFully Deleted')
                    const remainigService = services.filter((service) => service._id !== id);
                    setServices(remainigService)
                }
            });
    }

    return (
        <div>
            <h2>Total Services: {services.length}</h2>

            {
                services.map((service) => <div
                    key={service._id}
                >
                    <h2>{service.name}</h2>
                    <button onClick={() => deleteService(service._id)}>X</button>
                </div>)
            }

        </div >
    );
};

export default ManageService;