import React from 'react'
// import { ion-icon } from 'ionicons';
// import chevron-down from 'ionicons/icons';
import 'ionicons';
import './script.js';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <main>
            <aside className="sidebar" data-sidebar>
                <div className="sidebar-info">

                    <figure style={{ marginLeft: "75px" }} className="avatar-box">
                        <img src="src/assets/images/my-avatar.png" alt="Ido Roth" width="80" />
                    </figure>

                    <div className="info-content">
                        <a href="index.html">
                            <h1 style={{ marginLeft: "65px", marginTop: "7.5px" }} id="age" className="name" title="Ido Roth">Ido Roth</h1>
                        </a>

                        <p style={{ marginLeft: "45px" }} className="title">Full Stack Developer</p>
                    </div>

                    {/* <button className="info_more-btn" data-sidebar-btn>
                        <span>Show Contacts</span>

                        <ion-icon name="chevron-down"></ion-icon>
                    </button> */}
                </div>

                <div className="sidebar-info_more">
                    <div className="separator"></div>

                    <ul className="contacts-list">
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Email</p>

                                <a href="mailto:idoroth4@gmail.com" className="contact-link"
                                >idoroth4@gmail.com</a
                                >
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Phone</p>

                                <a href="tel:+972548333107" className="contact-link"
                                >+972 54-833-107</a
                                >
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="calendar-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>

                                <time dateTime="2002-01-14">January 14, 2002</time>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Location</p>

                                <address>Lod, Israel</address>
                            </div>
                        </li>
                    </ul>

                    <div className="separator"></div>

                    <ul className="social-list">
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>

            </aside>
        </main>
    )
};