import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'

const SignUp = () => {

    const handleSignUp = event =>{
        event.preventDefault();
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row md:gap-10">
    <div className="">
      <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
      <h1 className="text-5xl font-bold text-center">SignUp!</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6"> 
          <input  className="btn bg-orange-600 text-white" type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center pb-10'>Already Have An account? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;