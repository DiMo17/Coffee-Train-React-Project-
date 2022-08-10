import './main.css';
import coffee from "../../icons/coffee-beans.svg";

function Main() {
     return (
          <main>
               <div className="container">
                    <nav className="nav">
                         <ul className="nav__list">
                              <li className="nav__list-item nav__logo">
                                   <a href="#" className="nav__list-link">Coffee</a>
                              </li>
                              <li className="nav__list-item">
                                   <a href="#" className="nav__list-link">Our Coffee</a>
                              </li>
                              <li className="nav__list-item">
                                   <a href="#" className="nav__list-link">For your pleasure</a>
                              </li>
                         </ul>
                    </nav>
                    <section className='promo'>
                         <h1 className='promo__title'>Everything You Love About Coffee</h1>
                         <div className="promo__coffee-beans">
                              <img src={coffee} alt="coffee-beans" />
                         </div>
                         <p className="promo__text">We makes every day full of energy and taste</p>
                         <p className="promo__text">Want to try our beans?</p>
                         <a className='promo__link' href="#">More</a>
                    </section>
               </div>
          </main>
     );
}

export default Main;