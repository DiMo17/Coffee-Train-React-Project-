import './footer.css';

import coffeeBlack from "../../icons/coffee-beans-black.svg";

function Footer() {
     return (
          <footer>
               <div className="container">
                    <div className="footer__links">
                         <nav className="nav nav__footer">
                              <ul className="nav__list nav__footer-list">
                                   <li className="nav__list-item nav__logo-footer --black">
                                        <a href="#" className="nav__list-link --black">Coffee</a>
                                   </li>
                                   <li className="nav__list-item">
                                        <a href="#" className="nav__list-link --black">Our Coffee</a>
                                   </li>
                                   <li className="nav__list-item">
                                        <a href="#" className="nav__list-link --black">For your pleasure</a>
                                   </li>
                              </ul>
                         </nav>
                         <div className="about__coffee-beans">
                              <img src={coffeeBlack} alt="coffee-beans" />
                         </div>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;