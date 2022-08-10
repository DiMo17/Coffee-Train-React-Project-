import { Component } from 'react';
import AboutUs from '../aboutUs/aboutUs';
import OurBest from '../ourBest/ourBest';

import Main from '../main/main';


import './app.css';
import Footer from '../footer/footer';

class App extends Component {
     render() {

          return (
               <div className="app">
                    <Main></Main>
                    <AboutUs></AboutUs>
                    <OurBest></OurBest>
                    <Footer></Footer>
               </div>
          );
     }
}

export default App;