import '../../styles/shop/headershop.css'
import shopHeader from '../../assets/Shop-header.jpg'
import { forwardRef } from 'react';

const Headershop = forwardRef((props, ref) => {
  return (
      <>
        <section ref={ref} className='header-shop'>
          <div className="slider-container">
            <div className="slider" id="slider">
              <div
                className="slide active"
                style={{ backgroundImage: `url(${shopHeader}` }}
              >
                <h2 className="text">Selamat Hari Ayah</h2>
              </div>
              <div
                className="slide"
                style={{ backgroundImage: `url(${shopHeader}` }}
              >
                <h2 className="text">Selamat Hari Ayah</h2>
              </div>
              <div
                className="slide"
                style={{ backgroundImage: `url(${shopHeader}` }}
              >
                <h2 className="text">Selamat Hari Ayah</h2>
              </div>
            </div>

            <div className="change-slide">
              <button id="prev">&#10094;</button>
              <button id="next">&#10095;</button>
            </div>
          </div>

          <div className="description">
            <h1>Tanaman Hijau Membuat Orang Senang dan Bahagia</h1>
            <p>
              Belanja tanaman kami, hiasan indah, dan lebih banyak lagi langsung
              ke pintu rumahmu — kebahagiaan dijamin sampai!
            </p>
          </div>
        </section>
      </>
  );
});

export default Headershop;