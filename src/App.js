import logo from './logo.svg';
import './App.css';
import Photo from './Component/Profile/Photo'
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Photo />
      <FullName />
      <Adress />
      </header>
      
     
        
    </div>
  );
}

export default App;
