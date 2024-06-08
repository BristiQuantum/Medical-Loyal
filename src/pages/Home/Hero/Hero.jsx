

const Hero = () => {
    return (
        <div id="hero" className="hero-bg">
            <div className="set-hero">
                
                {/* main content  */}
                <div className="lg:w-1/2">
                    <p className="small-text">Welcome</p>
                    <h1>Meet the Best Hospital</h1>
                    <p>Medical Loyal is most focused in helping
                        you discover your most beauiful smile</p>

                        <div className="hero-btn">
                            <button className="btn-fill">join us</button>
                            <button className="btn-not-fill">learn more</button>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;