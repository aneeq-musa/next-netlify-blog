import React from 'react';

const ImageBanner = () => {
    return (
        <section className="image-banner">
            <div className="container-fluid">
                <div className="image-banner__content  image-banner__content--borderless  ">
                    <div className="row">
                        <div className="col-sm-12  image-banner__flex-column">
                            <div className="row image-banner__copy-container">
                                <div className="col-sm-12
	                         col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8  image-banner__content-container">
                                    <div className="image-banner__container ">
                                        <div className="image-banner__tag">AUTOMOTIVE</div>
                                        <p className="image-banner__heading">The 15 essential items to have in a roadside safety kit.</p>
                                        <div className="image-banner__cta-container">
                                            <a href="/blog/Automotive/the-15-essential-items-to-have-in-a-roadside-safety-kit" className="button  button--header">Read Article</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-banner__outer-container" style={{backgroundImage: "url('/promo-banner--blog-insurance--young-female-changing-a-flat-tire.jpeg');"}}>
                                <div className="image-banner__overlay" style={{backgroundColor: "rgba(0,0,0,0.6)"}}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageBanner;