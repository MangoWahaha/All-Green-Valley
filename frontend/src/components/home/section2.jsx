import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation} from 'swiper/modules';
import '../styles/home/section2.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import pilea from '../../assets/andrew-reshetov-f8tr3-MJzhc-unsplash-removebg-preview.png'

const Section2 = () => {
    return (
        <>
            <section className="section-content-2">
            <div className="section-content-2-desc">
                <h2 className="section-content-2-desc-title">Most Popular</h2>
                <p className="section-content-2-desc-para">
                Experience our top-rated product — expertly made with a focus on
                durability, sustainability, and elegance. A great fit for plant lovers
                who value both aesthetics and functionality.
                </p>
            </div>

            <div className="slider-container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2.4}
                    loop = {true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 6,
                        depth: 100,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    className="swiper"
                >
                <SwiperSlide>
                    <div className="section-content-2-box-2">
                        <div className="section-content-2-box-mini">
                            <img
                        src="/assets/birds-nest-plant-beige-pot-removebg-preview.png"
                        alt=""
                        className="images"
                        />
                        <h4 className="section-content-2-box-2-names">Pakis Sarang Burung</h4>
                        <p className="section-content-2-box-2-species">Asplenium nidus</p>
                            <div className="section-content-2-box-prices">
                                <p className='price'>$24</p>
                                    <div className='add-shopping'>
                                        <p className='plus'>+</p>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                        </div>
                        </div>
                    </div>
                    
                </SwiperSlide>

                <SwiperSlide>
                    <div className="section-content-2-box-2">
                        <div className="section-content-2-box-mini">
                            <img
                                src="/assets/fiddle-leaf-fig-plant-pot-removebg-preview.png"
                                alt=""
                                className="images"
                            />
                            <h4 className="section-content-2-box-2-names">Tanaman Ficus</h4>
                            <p className="section-content-2-box-2-species">Ficus lyrata</p>
                            <div className="section-content-2-box-prices">
                                <p className='price'>$24</p>
                                <div className='add-shopping'>
                                    <p className='plus'>+</p>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="section-content-2-box-2">
                        <div className="section-content-2-box-mini">
                            <img
                                src="/assets/faux-watermelon-peperomia-plant-terracotta-pot-home-decor-removebg-preview.png"
                                alt=""
                                className="images"
                            />
                            <h4 className="section-content-2-box-2-names">Peperomia Semangka</h4>
                            <p className="section-content-2-box-2-species">Pilea peperomioides</p>
                            <div className="section-content-2-box-prices">
                                <p className='price'>$24</p>
                                <div className='add-shopping'>
                                    <p className='plus'>+</p>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="section-content-2-box-2">
                        <div className="section-content-2-box-mini">
                            <img
                                src={pilea}
                                alt=""  
                                className="images"
                            />
                            <h4 className="section-content-2-box-2-names">Tanaman Uang Cina</h4>
                            <p className="section-content-2-box-2-species">Pilea peperomioides</p>
                            <div className="section-content-2-box-prices">
                                <p className='price'>$24</p>
                                <div className='add-shopping'>
                                    <p className='plus'>+</p>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                     </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="section-content-2-box-2">
                        <div className="section-content-2-box-mini">
                            <img
                                src="../../assets/stephanie-harvey-T0inbt7nRME-unsplash-removebg-preview.png"
                                alt=""
                                className="images"
                            />
                            <h4 className="section-content-2-box-2-names">Lidah Buaya</h4>
                            <p className="section-content-2-box-2-species">Aloe Vera</p>
                            <div className="section-content-2-box-prices">
                                 <p className='price'>$24</p>
                                <div className='add-shopping'>
                                    <p className='plus'>+</p>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="section-content-2-box-2">
                        <div className="section-content-2-box-mini">
                            <img
                                src="/assets/peace-lily-plant-terracotta-pot-home-decor-object-removebg-preview.png"
                                alt=""
                                className="images"
                            />
                            <h4 className="section-content-2-box-2-names">Tanaman Birkin</h4>
                            <p className="section-content-2-box-2-species">Philodendron hybrid</p>
                            <div className="section-content-2-box-prices">
                                 <p className='price'>$24</p>
                                <div className='add-shopping'>
                                    <p className='plus'>+</p>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                </Swiper>
            </div>
    </section>
        </>
    )
}

export default Section2;