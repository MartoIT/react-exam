export const DetailsArticle = () => {
    return (
        <div className="content-wrapper">
            <section id="main-content">

                {/* position: relative;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
    float: left; */}

                <div className="row" style={{ maxWidth: "80rem" }}>


                    <div className="large-9 columns" style={{
                        width: "75%", position: "relative", paddingLeft: "0.9375rem",
                        paddingRight: "0.9375rem", float: "left"
                    }} role="content">

                        <article>

                            <h1><a href="#">Blog Post Title</a></h1>
                            <p className="article_pub-date" style={{ color: "#949494" }}>Published
                                <time datetime="2014-05-13" pubdate="">May 13, 2014</time>
                            </p>

                            <div className="row" style={{ maxWidth: "80rem" }}>
                                <div className="large-12 columns" style={{
                                    width: "100%", position: "relative", paddingLeft: "5rem",
                                    paddingRight: "0.9375rem", float: "left"
                                }}>
                                    <img className="float-right" style={{ float: "right",  width: "600px"}} src="https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*" />
                                    <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong.
                                        Eiusmod swine spare ribs reprehenderit culpa.
                                    Boudin aliqua adipisicing rump corned beef. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.
                                    Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow.
                                        Nulla corned beef sunt ball tip,
                                        qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami. Nulla corned beef sunt ball tip, qui bresaola enim jowl.
                                        Capicola short ribs minim salami nulla nostrud pastrami.
                                    Pork drumstick turkey fugiat. Tri-tip elit turducken pork chop in. Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow.
                                        Nulla corned beef sunt ball tip, qui bresaola enim jowl.
                                        Capicola short ribs minim salami nulla nostrud pastrami.</p>
                                </div>
                            </div>

                        </article>


                    </div>
                </div>
            </section>
        </div>



    );
}; 