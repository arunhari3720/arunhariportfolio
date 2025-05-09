import { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Porfolio from './components/Portfolio';
import Footer from './components/Footer';
import resumeData from './resumeData';


class App extends Component{
  render(){
    return(
    <div className='App'>
    <Header resumeData={resumeData}/>
    <About resumeData={resumeData}/> 
    <Resume resumeData={resumeData}/>
    <Porfolio resumeData={resumeData}/>
    <Footer resumeData={resumeData}/>

    </div>
    );
  }
}
  


export default App;
