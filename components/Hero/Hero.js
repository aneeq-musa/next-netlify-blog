import React from 'react';

const Hero = () => {
    return (
        <>
            <section className="page-header">
                <div className="page-header__overlay"></div>
                <div className="page-header__background" style={{ backgroundImage:'url(/blog-hero.jpeg)'}}></div>
            <div className="container-fluid page-header__grid-container">
                <div className="page-header__grid-row row">
                    <div className="page-header__grid-col col-sm-12 col-md-12 col-lg-8 col-lg-offset-2">
                        <div className="page-header__content">
                            <div className="page-header__tag">
                                <span className="page-header__tag-faux-link">The Daily Boost</span>
                                </div>
                            <h1 id="sr_content" tabIndex="-1" className="heading heading--h1  page-header__heading">Making Safe Travels™ possible for over 115 years.</h1>
                            <p className="page-header__copy">Since 1903, CAA Advocacy has helped keep safety standards up to speed with the pace of change. Here’s a look back at some of our biggest milestones. </p>
                            <div className="page-header__cta-container">
                                <a href="/blog/Community/making-safe-travels-possible-for-over-115-years" className="button button--header page-header__cta">Read Article</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
    );
};

export default Hero;