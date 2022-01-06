import './App.css';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Destination />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
