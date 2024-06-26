import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row ">
    <div className='md:w-1/2 relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
    </div>
    <div className='md:w-1/2 space-y-7 p-4'>
        <h3 className="text-xl text-orange-500 font-bold">About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable</p>
      <button className='btn bg-orange-600 text-white font-semibold border-0'>Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;