// Contact Page Component
const Contact = () => {
    return (
        <main>
            <article className="contact active" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>

                <section className="mapbox" data-mapbox>
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27082.148459092656!2d34.914923170301165!3d31.953610257067517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502ca5c5ad106a1%3A0xacee445e07ca811a!2z15zXldeT!5e0!3m2!1siw!2sil!4v1736603865286!5m2!1siw!2sil"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </figure>
                </section>

                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>

                    <form action="#" className="form" data-form>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="fullname"
                                className="form-input"
                                placeholder="Full name"
                                required
                                data-form-input
                            />

                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Email address"
                                required
                                data-form-input
                            />
                        </div>

                        <textarea
                            name="message"
                            className="form-input"
                            placeholder="Your Message"
                            required
                            data-form-input
                        ></textarea>

                        <button className="form-btn" type="submit" data-form-btn>
                            <ion-icon name="paper-plane"></ion-icon>
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
        </main >
    );
};

export default Contact;