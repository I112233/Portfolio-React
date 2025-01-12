// About Page Component
const About = () => {
    return (
        <main>
            <article className="about active" data-page="about">
                <header>
                    <h2 className="h2 article-title">About</h2>
                </header>

                <section className="about-text">
                    <p>I am a Full Stack developer from Lod, Israel.</p>

                    <p style={{
                        textAlign: "justify", textJustify: "inter-word", width: "900px"
                    }}>
                        My job is to build your website so that it is functional,
                        user-friendly and attractive at the same time. Furthermore, I add
                        personal touch to your website and make sure that it is
                        eye-catching and easy to use. My aim is to bring across your
                        message and identity in the most creative way.
                    </p>
                </section>

                <section className="service">
                    <h3 className="h3 service-title">Skills</h3>

                    <ul className="service-list">

                        <li className="service-item">
                            <div className="service-icon-box">
                                <img
                                    src="src/assets/images/icon-dev.svg"
                                    alt="Web development icon"
                                    width="40"
                                />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Web development</h4>

                                <p className="service-item-text">
                                    Website development with HTML, CSS, JS, TS, React.js and Node.js.
                                </p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-icon-box">
                                <img
                                    src="src/assets/images/icon-design.svg
                "
                                    alt="design icon"
                                    width="40"
                                />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Interpersonal Communication</h4>

                                <p className="service-item-text">
                                    High level of emotional intelligence and articulateness. Fluency in English.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="testimonials">
                    <h3 className="h3 testimonials-title">Testimonials</h3>

                    <ul className="testimonials-list has-scrollbar">
                        <li className="testimonials-item">
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img
                                        src="src/assets/images/avatar-1.png"
                                        alt="Daniel lewis"
                                        width="60"
                                        data-testimonials-avatar
                                    />
                                </figure>

                                <h4
                                    className="h4 testimonials-item-title"
                                    data-testimonials-title
                                >
                                    Daniel lewis
                                </h4>

                                <div className="testimonials-text" data-testimonials-text>
                                    <p>
                                        Ido developed a memory card game for my daughter.
                                        She likes it very much! And the fireworks when she wins as well.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="testimonials-item">
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img
                                        src="src/assets/images/avatar-2.png"
                                        alt="Jessica miller"
                                        width="60"
                                        data-testimonials-avatar
                                    />
                                </figure>

                                <h4
                                    className="h4 testimonials-item-title"
                                    data-testimonials-title
                                >
                                    Jessica miller
                                </h4>

                                <div className="testimonials-text" data-testimonials-text>
                                    <p>
                                        Ido built a task management tool for me.
                                        I find it really helpful and I don't know how I got along before.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="testimonials-item">
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img
                                        src="src/assets/images/avatar-3.png"
                                        alt="Emily evans"
                                        width="60"
                                        data-testimonials-avatar
                                    />
                                </figure>

                                <h4
                                    className="h4 testimonials-item-title"
                                    data-testimonials-title
                                >
                                    Emily evans
                                </h4>

                                <div className="testimonials-text" data-testimonials-text>
                                    <p>
                                        Ido created a trivia quiz for me and my family.
                                        We play with it every weekend and we really have fun!
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="testimonials-item">
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img
                                        src="src/assets/images/avatar-4.png"
                                        alt="Henry william"
                                        width="60"
                                        data-testimonials-avatar
                                    />
                                </figure>

                                <h4
                                    className="h4 testimonials-item-title"
                                    data-testimonials-title
                                >
                                    Henry william
                                </h4>

                                <div className="testimonials-text" data-testimonials-text>
                                    <p>
                                        I didn't know where to go until I discovered Ido's place picker -
                                        I plan every travel with it.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>

                <div className="modal-container" data-modal-container>
                    <div className="overlay" data-overlay></div>

                    <section className="testimonials-modal">
                        <button className="modal-close-btn" data-modal-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>

                        <div className="modal-img-wrapper">
                            <figure className="modal-avatar-box">
                                <img
                                    src="src/assets/images/avatar-1.png"
                                    alt="Daniel lewis"
                                    width="80"
                                    data-modal-img
                                />
                            </figure>

                            <img src="src/assets/images/icon-quote.svg" alt="quote icon" />
                        </div>

                        <div className="modal-content">
                            <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

                            <time dateTime="2021-06-14">14 June, 2021</time>

                            <div data-modal-text>
                                <p>
                                    Ido was hired to create a corporate identity. We were very
                                    pleased with the work done. She has a lot of experience and
                                    is very concerned about the needs of client. Lorem ipsum
                                    dolor sit amet, ullamcous cididt consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels
                                    dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="clients">
                    <h3 className="h3 clients-title">Clients</h3>

                    <ul className="clients-list has-scrollbar">
                        <li className="clients-item">
                            <a href="#">
                                <img src="src/assets/images/logo-1-color.png" alt="client logo" />
                            </a>
                        </li>

                        <li className="clients-item">
                            <a href="#">
                                <img src="src/assets/images/logo-2-color.png" alt="client logo" />
                            </a>
                        </li>

                        <li className="clients-item">
                            <a href="#">
                                <img src="src/assets/images/logo-3-color.png" alt="client logo" />
                            </a>
                        </li>

                        <li className="clients-item">
                            <a href="#">
                                <img src="src/assets/images/logo-4-color.png" alt="client logo" />
                            </a>
                        </li>

                        <li className="clients-item">
                            <a href="#">
                                <img src="src/assets/images/logo-5-color.png" alt="client logo" />
                            </a>
                        </li>

                        <li className="clients-item">
                            <a href="#">
                                <img src="src/assets/images/logo-6-color.png" alt="client logo" />
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    );
};

export default About;