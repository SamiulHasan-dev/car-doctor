import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const ServiceCard = ({service}) => {

    const {_id, title, img, price} = service;

    return (
        <div>
            <div className="card border">
  <figure className="px-8 pt-8">
    <img src={img} alt="Shoes" className="rounded-xl h-[220px] w-full" />
  </figure>
  <div className="card-body px-8">
    <h2 className="card-title font-bold">{title}</h2>
    <div className="flex justify-between items-center">
    <p className="text-orange-600 font-semibold">Price: ${price}</p>
    <Link to={`/book/${_id}`}><button className="btn bg-white font-extrabold text-orange-600 text-2xl"><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></button></Link>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default ServiceCard;