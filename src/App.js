import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {WithRouter} from 'react-router';
import Header from './component/header';
import Banner from './component/banner';
import Portfolio from './component/portfolio';
import About from './component/about';
import Contact from './component/contact';
import Footer from './component/footer';
import Gap from './component/shared/gap';
import PopUp from './component/shared/popUp';
import PAGENOTFOUND from './component/notFound';

import styled from 'styled-components';
import './App.css'



import HomePages from './pages/home';
import AboutPages from './pages/about';
import ContactPages from './pages/contact';



const BackToTop = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #ffffff;
    background-color: #2c3e50;
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    line-height: 30px;
    color: #fff;
    font-size: 21px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.myRef = React.createRef()   // Create a ref object 
  }

  componentDidMount() {
    // this.myRef.current.scrollTo(0, 0);
    // console.log("JJJ", this.myRef.current.clientHeight)

  }




  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, 16.66);
    this.setState({ intervalId: intervalId });
  }




  render() {
    console.log("propsNew",this.props)
    return (
      <Router >
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/">
              <HomePages />
            </Route>
            <Route path="/portfolio">
              <Gap h="100px" />
              <Portfolio />
            </Route>
            <Route path="/about">
              <Gap h="40px" />
              <AboutPages />
            </Route>
            <Route path="/contact">
              <ContactPages />
            </Route>
            <Route component={PAGENOTFOUND}></Route>
          </Switch>
          <Gap h="40px" />
          <Footer />
          <BackToTop onClick={this.scrollToTop}><i className="fas fa-angle-up"></i></BackToTop>
        </div>
      </Router>
    );
  }
}
export default App;
