import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
// import img5 from '../../../assets/images/banner/5.jpg'
// import img6 from '../../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel h-[500px] rounded-lg">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-lg" />
    <div className="absolute h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className='space-y-5 w-1/2 pl-5 md:pl-12'>
        <h2 className="text-4xl text-white font-bold">Affordable Price For Car Servicing</h2>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='md:space-x-2'>
            <button className='btn bg-orange-600 text-white font-semibold border-0'>DISCOVER MODE</button>
            <button className='btn btn-ghost text-white font-semibold border-2 border-gray-200'>LATEST PROJECT</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className='space-y-5 w-1/2 pl-5 md:pl-12'>
        <h2 className="text-4xl text-white font-bold">Affordable Price For Car Servicing</h2>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='md:space-x-2'>
            <button className='btn bg-orange-600 text-white font-semibold border-0'>DISCOVER MODE</button>
            <button className='btn btn-ghost text-white font-semibold border-2 border-gray-200'>LATEST PROJECT</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className='space-y-5 w-1/2 pl-5 md:pl-12'>
        <h2 className="text-4xl text-white font-bold">Affordable Price For Car Servicing</h2>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='md:space-x-2'>
            <button className='btn bg-orange-600 text-white font-semibold border-0'>DISCOVER MODE</button>
            <button className='btn btn-ghost text-white font-semibold border-2 border-gray-200'>LATEST PROJECT</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className='space-y-5 w-1/2 pl-5 md:pl-12'>
        <h2 className="text-4xl text-white font-bold">Affordable Price For Car Servicing</h2>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='md:space-x-2'>
            <button className='btn bg-orange-600 text-white font-semibold border-0'>DISCOVER MODE</button>
            <button className='btn btn-ghost text-white font-semibold border-2 border-gray-200'>LATEST PROJECT</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;