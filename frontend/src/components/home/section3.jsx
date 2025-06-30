import '../styles/home/section3.css'

const Section3 = () => {
    return (
        <>
            <section className="section-content-3">
                <div className="section-content-3-emptybox">
                    {/* <img className="sample" src="/src/assets/pelipeli2.png" alt="sample" /> */}
                    <img className="sample2" src="/src/assets/plants12.png" alt="sample2" />
                    </div>
                <div className="section-content-3-pack">
                    <div className="section-content-3-desc">
                            <h2 className="section-content-3-desc-title">How to Order</h2>
                            <p className="section-content-3-desc-para">
                                Ordering your favorite plants is simple and quick! Just follow these
                                easy steps
                            </p>
                    </div>
                    <div className="section-content-3-orders">
                    <div className="section-content-3-orders-box one">
                        <div className="descriptions">
                            <h3 className="descriptions-title">Pick Your Favorite Plant</h3>
                            <p className="descriptions-para">
                            Browse and select the plant you like to view its care guide, pot
                            choices, and detailed info.
                            </p>
                        </div>
                        <h1 className="nums">01</h1>
                    </div>
                    <div className="section-content-3-orders-box two">
                        <div className="descriptions">
                        <h3 className="descriptions-title">Complete Your Purchase</h3>
                        <p className="descriptions-para">
                            Fill in your shipping info and pay securely with your chosen payment
                            method.
                        </p>
                        </div>
                        <h1 className="nums">02</h1>
                    </div>
                    <div className="section-content-3-orders-box three">
                        <div className="descriptions">
                        <h3 className="descriptions-title">Receive Your Plant</h3>
                        <p className="descriptions-para">
                            We pack each plant with care to make sure it reaches you fresh and
                            in great condition.
                        </p>
                        </div>
                        <h1 className="nums">03</h1>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default Section3;