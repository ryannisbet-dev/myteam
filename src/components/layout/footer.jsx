import Logo from '../../assets/logo.svg';
import '../../styles/layout.scss';

import Twitter from '../../assets/icon-twitter.svg';
import Facebook from '../../assets/icon-facebook.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentUrl = window.location.pathname;

    return (
        <footer className="footer__container">
            {/* don't render this on the contact page */}
            {currentUrl !== '/contact' && (
                <div className="footer__top">
                    <h1 className="heading heading__dark">Ready to get started?</h1>
                    <a href="/contact" className="btn btn--dark">Contact us</a>
                </div>
            )}

            <div className="footer__bottom">
                <section className="footer__navWrap">
                    <img src={Logo} alt="myteam logo" className="footer__logo" />
                    <ul className="footer__nav">
                        <li className="footer__item"><Link to="/" className="u-link">Home</Link></li>
                        <li className="footer__item"><Link to="/about" className="u-link">About</Link></li>
                    </ul>
                </section>

                <section className="footer__addressWrap">
                    <div className="footer__address">
                        <p>987 Hillcrest Lane</p>
                        <p>Irvine, CA</p>
                        <p>California 92714</p>
                        <p>Call Us : 949-833-7432</p>
                    </div>
                    
                </section>

                <section className="footer__socialsWrap">

                    <p>Website developed by Ryan Nisbet.</p>

                    <div className="footer__socials">
                        <img src={Twitter} alt="twitter" className="footer__social" />
                        <img src={Facebook} alt="facebook" className="footer__social" />
                        <img src={Pinterest} alt="pinterest" className="footer__social" />
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;