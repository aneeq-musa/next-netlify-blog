import React from 'react';

const Article = () => {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="related-articles__container">
                <a href="/blog/Automotive/find-out-why-caas-roadside-assistance-program-is-unmatched" className="related-articles__link">
                    <div className="related-articles__image-container" style={{height: "163.719px"}}>
                        <img className="related-articles__image" src="/blog-img--caa-tow-truck-driver.jpeg" alt="CAA Tow Truck driver smiling in front of his vehicle." />
                    </div>
                    <div className="related-articles__info-container">
                        <p className="paragraph related-articles--tag">automotive</p>
                        <h3 className="heading heading--h3 related-articles__heading">Find out Why CAA's Roadside Assistance Program Is Unmatched</h3>
                        <p className="related-articles__copy">Having a Manufacturer’s Roadside Assistance Plan is one of the perks that you often get when you buy a new car, but just how well do these plans stack up against CAA? </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Article;