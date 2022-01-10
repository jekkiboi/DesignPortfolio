import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './config/Routes'
function App() {
  return (
    <div className="app-index">
        
      <Header />
      <Routes/>
      <Footer/>

    </div>
  );
}


export default App;
