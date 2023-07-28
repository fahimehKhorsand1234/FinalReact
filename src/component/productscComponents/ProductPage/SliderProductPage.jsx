//import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import { FreeMode, Thumbs } from 'swiper/modules';
// import sofa1 from '../../imges/sofa1.png';
// import flower from '../../imges/flower.png';
// import sofa2 from '../../imges/sofa2.png';
// import flower2 from '../../imges/flower2.png';
// // // import Swiper from 'swiper/bundle';
// // import 'swiper/css/bundle';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import 'swiper/css/pagination';

// // import 'Styles.css';
// import '../../assest/Style.css';

// // import required modules

// export default function App() {
//   const [thumbsSwiper, setThumbsSwiper] = useState();

//   return (
//     <>
//       <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src={sofa1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={flower} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={sofa2} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={flower2} />
//         </SwiperSlide>

//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src={sofa1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={flower} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={sofa2} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={flower2} />
//         </SwiperSlide>

//       </Swiper>
//     </>
//   );
//}

import React, { useRef, useState } from "react";

export default function SliderProductPage({ images }) {
  const [selectedImage, setselectedImage] = useState(
    images ? images[0].imageurl : undefined
  );
  return (
    <div>
      <div className="flex flex-col justify-center">
        <img
          src={selectedImage}
          alt=""
          className="w-full h-full rounded rounded-lg "
        />
      </div>
      <div className="flex flex-row  justify-center mt-5   gap-2 ">
        {/* <div onClick={() => setImage(sofa1)}>
          <img src={sofa1} alt="" className="w-14 h-14 rounded rounded-lg " />
        </div> */}
        {images.map((item, index) => {
          return (
            <div key={index} onClick={() => setselectedImage(item.imageurl)}>
              <img
                src={item.imageurl}
                className="w-14 h-14 rounded rounded-lg "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
