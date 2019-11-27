import React, {Component} from 'react';
import Header from './component/header';
import Banner from './component/banner';
import Portfolio from './component/portfolio';
import About from './component/about';
import Contact from './component/contact';
import Footer from './component/footer';
import Gap from './component/shared/gap';
import PopUp from './component/shared/popUp';
import styled from 'styled-components';
import './App.css'



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
  constructor(props){
    super(props);
    this.state = {

    }
    this.myRef = React.createRef()   // Create a ref object 
  }

  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
    console.log("JJJ", this.myRef.current.clientHeight)

  }

  ClickNav = () =>{
    let height = this.myRef.current.clientHeight;
    console.log("NEW H", height)
    window.scrollTo(0, 200)
  }
  
  

  scrollStep =() => {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }
  
  scrollToTop =() =>  {
    let intervalId = setInterval(this.scrollStep, 16.66);
    this.setState({ intervalId: intervalId });
  }
  



  render() {
    console.log("window.pageYOffset", window.pageYOffset)
    return (
      <div className="App">
       <div  ref={this.myRef}>
       <Header ClickNav={this.ClickNav}/>
        <Banner />
        <Gap h="40px" />
       </div>
        <Portfolio />
        <Gap h="40px" />
        <About />
        <Gap h="40px" />
        <Contact />
        <Gap h="40px" />
        <Footer />
       
        <BackToTop onClick={this.scrollToTop}><i className="fas fa-angle-up"></i></BackToTop>
      </div>
    );
  }
}
export default App;
