import "./Contact.css";
import fbIcon from "/src/assets/icons/facebook-logo.svg";
import igIcon from "/src/assets/icons/instagram-logo.svg";
import { contactInfo } from "../../constants/";


const Contact = () => {
    return (
        <section id="contact-section">
            <div className="section-title">
                <h1 className="gold-text">Get In Touch</h1>
                <p>Have a question, need a quote, or planning your next build?<br />
                    Get in touch with AutoCradle and let’s get your vehicle taken care of.</p>
            </div>
            <div className="cards-container">
                <div className="card">
                    <div className="card-title-sub">
                        <h3>AutoCradle Auto Shop</h3>
                        <p>Professional Car Detailing and Automotive Shop</p>
                    </div>
                    <hr></hr>
                    <div id="card-contacts-list">
                        <p>
                            <span>
                                <svg viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#0B0B0C" stroke="#0B0B0C"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>call [#C9A24D]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#C9A24D"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596" id="call-[#C9A24D]"> </path> </g> </g> </g> </g></svg>                            </span>
                            {contactInfo.phone}
                        </p>
                        <p>
                            <span>
                                <svg viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#C9A24D]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="#C9A24D"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#C9A24D]"> </path> </g> </g> </g> </g></svg>
                            </span>
                            {contactInfo.email}
                        </p>
                        <p>
                            <span>
                                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#C9A24D" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                            </span>
                            {contactInfo.address}
                        </p>
                        <p>
                            <span>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M9.99996 2C9.44768 2 8.99996 2.44772 8.99996 3V4.58178C8.30471 4.86318 7.65844 5.23923 7.07704 5.69365L5.70573 4.90193C5.47605 4.76932 5.20309 4.73338 4.94691 4.80202C4.69073 4.87067 4.47232 5.03827 4.33971 5.26795L2.33971 8.73205C2.06357 9.21034 2.22744 9.82193 2.70573 10.0981L4.07654 10.8895C4.02603 11.2528 3.99997 11.6236 3.99997 12C3.99997 12.3764 4.02603 12.7471 4.07654 13.1105L2.70574 13.9019C2.47605 14.0345 2.30846 14.2529 2.23981 14.5091C2.17117 14.7653 2.2071 15.0382 2.33971 15.2679L4.33971 18.732C4.47232 18.9617 4.69074 19.1293 4.94692 19.198C5.2031 19.2666 5.47605 19.2307 5.70574 19.0981L7.07706 18.3063C7.65846 18.7607 8.30472 19.1368 8.99996 19.4182V21C8.99996 21.5523 9.44768 22 9.99996 22H14C14.5522 22 15 21.5523 15 21V19.4182C15.6952 19.1368 16.3415 18.7607 16.9229 18.3063L18.2942 19.0981C18.5239 19.2307 18.7968 19.2666 19.053 19.198C19.3092 19.1293 19.5276 18.9617 19.6602 18.7321L21.6602 15.268C21.7928 15.0383 21.8288 14.7653 21.7601 14.5091C21.6915 14.253 21.5239 14.0345 21.2942 13.9019L19.9234 13.1105C19.9739 12.7472 20 12.3764 20 12C20 11.6236 19.9739 11.2528 19.9234 10.8895L21.2942 10.0981C21.7725 9.82191 21.9364 9.21032 21.6602 8.73203L19.6602 5.26793C19.5276 5.03824 19.3092 4.87065 19.053 4.802C18.7968 4.73336 18.5239 4.76929 18.2942 4.9019L16.9229 5.69364C16.3415 5.23922 15.6952 4.86318 15 4.58178V3C15 2.44772 14.5522 2 14 2H9.99996ZM11 5.28986V4H13V5.28986C13 5.73228 13.2907 6.12211 13.7147 6.24831C14.6258 6.51947 15.4475 7.00198 16.1223 7.64029C16.4436 7.94424 16.9264 8.00099 17.3095 7.77984L18.4282 7.13395L19.4282 8.866L18.3109 9.51107C17.9281 9.73205 17.7358 10.1781 17.8379 10.6081C17.9437 11.0538 18 11.5197 18 12C18 12.4803 17.9437 12.9462 17.8379 13.3919C17.7358 13.8219 17.9281 14.2679 18.3109 14.4889L19.4282 15.134L18.4282 16.866L17.3094 16.2201C16.9264 15.999 16.4436 16.0557 16.1222 16.3597C15.4475 16.998 14.6258 17.4805 13.7147 17.7516C13.2907 17.8778 13 18.2677 13 18.7101V20H11V18.7101C11 18.2677 10.7092 17.8778 10.2852 17.7516C9.37409 17.4805 8.55246 16.998 7.87767 16.3597C7.55635 16.0557 7.07352 15.999 6.69048 16.2201L5.57176 16.866L4.57176 15.134L5.68905 14.4889C6.0718 14.2679 6.26409 13.8219 6.16201 13.3919C6.05621 12.9462 5.99997 12.4803 5.99997 12C5.99997 11.5197 6.0562 11.0538 6.16201 10.6081C6.26409 10.1781 6.07179 9.73207 5.68905 9.51109L4.57176 8.86603L5.57176 7.13398L6.69046 7.77986C7.07351 8.00101 7.55633 7.94425 7.87766 7.6403C8.55245 7.00199 9.37409 6.51948 10.2852 6.24831C10.7092 6.12211 11 5.73228 11 5.28986ZM9.99998 12C9.99998 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 9.99998 13.1046 9.99998 12ZM12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z" fill="#C9A24D"></path> </g></svg>                            </span>
                            {contactInfo.shopHours}
                        </p>
                        <p className="text-sub">Follow us on social media:</p>
                        <div className="socials-list">
                            <a href={contactInfo.socials.fbLink}>
                                <img src={fbIcon}></img>
                            </a>
                            <a href="">
                                <img src={igIcon}></img>
                            </a>
                        </div>
                        <hr></hr>
                        <div className="btn-container">
                            <button className="gold-btn">GET A FREE QUOTE</button>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.5180012955657!2d-106.71427482354534!3d52.10670316674692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f1b16576f585%3A0x57b8c5c101a50860!2sAutoCradle%20Auto%20Shop!5e0!3m2!1sen!2sph!4v1767452772734!5m2!1sen!2sph"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AutoCradle Location"
                    ></iframe>
                </div>
            </div>
        </section >
    );
}

export default Contact;