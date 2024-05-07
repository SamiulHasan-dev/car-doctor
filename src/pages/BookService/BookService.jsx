import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    const { title, _id, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = e =>{
        e.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(booking),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })

    }

    return (
        <div>
            <h2 className="text-2xl text-center">BookService: {title}</h2>

            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleBookService} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' defaultValue={user?.name} type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name='date' type="date" placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" defaultValue={user?.email} type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$ '+price} className="input input-bordered" required />
                        
                    </div>
                    
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-orange-600 text-white font-bold btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;