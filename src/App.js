import './App.css';
import Slider from './Slider.js'
import Header from './Header.js'
import Posts from './Post.js'
import Footer from './Footer.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Slider/>
        <Posts/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
