import React from 'react';

const ArticlesContainer = (props) => {
    return (
        <>
            <section class="related-articles">
                <div class="container-fluid">
                    <div class="related-articles__content  related-articles__content--borderless">
                        <div class="row">
                            <div class="col-sm-12">
                                { props.heading === true && <h2 class="heading heading--h2 related-articles__heading related-articles__heading--center">The Daily Boost</h2>}
                            </div>
                        </div>
                        <div class="row is-flex">
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ArticlesContainer;