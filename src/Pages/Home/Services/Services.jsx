import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //console.log(services);
    return (
        <div className='my-4 '>
            <div className='text-center'>
                <h3 className="text-3xl text-orange-600">Service</h3>
                <h3 className="text-5xl ">Our Services Area</h3>
                <br />
                <p className='w-3/4 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;