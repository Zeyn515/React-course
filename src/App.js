import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = () => {
  return ( 
    <div className = 'app-wrapper' >
    <Header/>
    <Navbar/>
    {/* <Profile/> */}
    <div className = 'app-wrapper-content'>
    <Dialogs/>
    </div>
    </div>
  );
}


export default App;