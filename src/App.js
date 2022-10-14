import './App.css';
import Navbar from './components/navbar/navbarJSX';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'¡Bienvenido a Los Herederos de Baden Powell!'}/> 
      <ItemDetailContainer greeting={'xd'}/>
    </div>
  );
}

export default App;
