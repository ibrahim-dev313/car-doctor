import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="flex justify-center w-full ">
            <div className="shadow-xl rounded-xl card w-96 bg-base-100">
                <figure className="px-6 pt-6">
                    <img src={img} alt="Shoes" className="w-full h-52 rounded-xl" />
                </figure>
                <div className=" card-body">
                    <h2 className="card-title">{title}</h2>

                    <div className="flex items-center justify-between card-actions">
                        <p className="font-bold text-orange-500">Price: {price}</p>
                        <Link to={`/checkout/${_id}`} className="rounded-full btn btn-outline btn-error"><FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;