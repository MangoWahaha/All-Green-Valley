import { forwardRef } from 'react';
import '../styles/home/header.css';

const Header = forwardRef((props, ref) => {
    return (
        <>
            {/* Header */}
            <header ref={ref}>
                <div className="header-description">
                    <h1 className="header-title">Make Your Home a Greener Place</h1>
                        <p className="header-paragraph">
                            Discover the beauty and benefits of ornamental plants to brighten your
                            space and refresh your home.
                        </p>
                        <button className="cta-button">
                            Shop now <i className="fa-solid fa-arrow-up" />
                        </button>
                </div>
            </header>
        </>
    );
});

export default Header;