import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])


    return (
        <div>
            <div className="text-center my-8 space-y-2">
            <h3 className="text-orange-500 text-2xl font-bold">Service</h3>
            <h2 className="text-4xl font-bold">Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words <br /> which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;