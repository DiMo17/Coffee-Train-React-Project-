import './ourBest.css';

import Solim from "../../img/solim.png";
import Presto from "../../img/presto.png";
import Aromistico from "../../img/aromistico.png";

function OurBest() {
     return (
          <section className='best'>
               <div className="container">
                    <div className="best-coffee">
                         <h2 className="title best-coffee__title">Our Best</h2>
                         <div className="best-coffee__items">
                              <div className="best-coffee__item">
                                   <img src={Solim} alt="" className="best-coffee__img" />
                                   <div className="best-coffee__name">Solimo Coffee Beans 2 kg</div>
                                   <div className="best-coffee__price">10.73$</div>
                              </div>
                              <div className="best-coffee__item">
                                   <img src={Presto} alt="" className="best-coffee__img" />
                                   <div className="best-coffee__name">Presto Coffee Beans 1 kg</div>
                                   <div className="best-coffee__price">15.99$</div>
                              </div>
                              <div className="best-coffee__item">
                                   <img src={Aromistico} alt="" className="best-coffee__img" />
                                   <div className="best-coffee__name">AROMISTICO Coffee 1 kg</div>
                                   <div className="best-coffee__price">6.99$</div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default OurBest;