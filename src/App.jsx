import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Main from './Main';
import Footer from './Footer';

export default function App() {
  return (
    <div className="grid-container">
      <Header />
      <SideBar />
      <Main />
      <Footer />
    </div>
  )
}
