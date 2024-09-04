import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div>
            <div className="f-color1">
                <div>
                    <ul>
                        <li><i className='bx bxl-facebook-square'></i></li>
                        <li><i className='bx bxl-twitter'></i></li>
                        <li><i className='bx bxl-instagram'></i></li>
                    </ul>

                </div>
                <div>
                    <p>Join our email list.</p>
                    <input type="text" placeholder="Email address" />
                    <button>Subscribe</button>
                    <button>Unsubscribe</button>
                </div>
                <p>By clicking SUBSCRIBE I agree to receive news, promotions, information and offers from Kats Cafe.</p>

            </div>
            <div className="f-color2">

                <div>
                    <div>
                        <h3>LOCATIONS</h3>
                        <h4>KAMPALA</h4>
                        <ul>
                            <li>Bombo Road</li>
                            <li>Nakawa</li>
                            <li>Lugogo</li>
                            <li>Kampala Road</li>
                        </ul>
                        <h3>ENTEBBE</h3>
                        <ul>
                            <li>Victoria Mall</li>
                        </ul>
                    </div>
                    <div>
                        <h3>CONTACT US</h3>
                        <ul>
                            <li>+256 780443224</li>
                            <li>+256 740730110</li>
                        </ul>
                    </div>
                    <div>
                        <h3>OUR MENU</h3>
                        <li>BREAKFAST</li>
                        <li>DRINKS</li>
                        <li>MAINS</li>
                        <li>DESERTS</li>
                    </div>
                </div>

                <div>
                    <p>We are commited to great food, great coffee, great service, an experience that will make your time with us fabulous.</p>
                </div>
                <div>
                    <Link>Privacy Policy |</Link>
                    <Link>Terms of Use |</Link>
                    <Link>Contact Us |</Link>
                    <Link>Careers |</Link>
                    <Link>Blog |</Link>
                    <Link>Feedback |</Link>
                </div>
                <p>&copy;2024 Kats Cafe.All Rights Reserved</p>

            </div>
        </div>
     );
}
 
export default Footer;