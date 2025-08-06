import Background from './components/Background';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <Background>
      <div className="app-container">
        <Header />
        <Body />
        <Footer />
      </div>
    </Background>
  );
}