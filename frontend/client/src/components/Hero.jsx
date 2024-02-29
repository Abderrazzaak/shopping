import React from 'react';

export default function HeroSection() {
  return (
    <section className='vh-100'>

      <div className="dark:bg-violet-400">
        <div className="container flex flex-col items-center justify-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <div className="flex flex-wrap justify-center">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src="https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_640.jpg" alt="" className="w-100 mb-12 rounded-lg shadow-md dark:bg-gray-500" />
          </div>
          <div className="col-md-6 text-center">
            <h1 className="text-5xl font-bold leading-sm sm:text-6xl xl:max-w-3xl dark:text-gray-900">Cactus</h1>
            <p className="mt-4 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Cacti are succulent plants belonging to the family Cactaceae, native primarily to arid regions of the Americas. They are known for their unique appearance, often characterized by thick, fleshy stems and spines. Cacti have adapted to survive in harsh desert environments by storing water in their stems, which allows them to withstand long periods of drought. Some cacti produce vibrant flowers, while others bear edible fruits. Due to their striking appearance and resilience, cacti are popular as ornamental plants in gardens and homes worldwide.</p>

            <button type="button" className="btn btn-lg btn-light-green border m-2">Go Shop</button>
            {/* <button type="button" className="btn btn-lg btn-outline-secondary m-2">Learn more</button> */}
          </div>
        </div>
      </div>
     
      <div className="container company-presentation-bar d-flex align-items-center mt-5">
        <div className="company-logo">
          <img src="https://imagizer.imageshack.com/img923/2104/vlbcCC.png" alt="Company Logo" />
        
        <div className="company-info ml-3">
          <h1>Qui Sommes Nous?</h1>
          <p>
          Welcome to CactuShop, your ultimate destination for all things cactus! CactuShop is an innovative online platform designed to provide cactus enthusiasts with a seamless shopping experience, offering a diverse selection of high-quality cacti, expert guidance, and community engagement opportunities.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}





























// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import cactus1 from './assets/cactus1.jpg';
// import cactus2 from './assets/cactus2.jpg';
// import cactus3 from './assets/cactus3.jpg';
// import cactus4 from './assets/cactus4.jpg';
// import cactus5 from './assets/cactus5.jpg';

// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// export default function Hero() {
//   const imageContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     padding: '100px',
    
   
//   };

//   const imageStyle = {
//     width: '400px', 
//     height: '400px',
//     top : '100px' ,
//   };
//  const description ={
//   marginLeft: '5px'
 
//  };
//   return (
//     <div className='apphero'>
//       <div style={imageContainerStyle}>
//       <div style={{ marginRight: '20px' }}> </div>
//         <Swiper
//           cssMode={true}
//           navigation={true}
//           pagination={true}
//           mousewheel={true}
//           keyboard={true}
//           modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//           className="mySwiper"
//         >
//           <SwiperSlide><img src={cactus1} alt="cactus1" style={imageStyle} /></SwiperSlide>
//           <SwiperSlide><img src={cactus2} alt="cactus2" style={imageStyle} /></SwiperSlide>
//           <SwiperSlide><img src={cactus3} alt="cactus3" style={imageStyle} /></SwiperSlide>
//           <SwiperSlide><img src={cactus4} alt="cactus4" style={imageStyle} /></SwiperSlide>
//           <SwiperSlide><img src={cactus5} alt="cactus5" style={imageStyle} /></SwiperSlide>
//         </Swiper>
//         <div style={description}>
//           <h1>Cactus</h1>
//           <p>Cacti are succulent plants belonging to the family Cactaceae, native primarily to arid regions of the Americas. They are known for their unique appearance, often characterized by thick, fleshy stems and spines. Cacti have adapted to survive in harsh desert environments by storing water in their stems, which allows them to withstand long periods of drought. Some cacti produce vibrant flowers, while others bear edible fruits. Due to their striking appearance and resilience, cacti are popular as ornamental plants in gardens and homes worldwide.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

