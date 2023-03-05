import './App.css';
import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App(){
  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/7.jpg" alt="Banner" />
      </div>
      <h2>Imagem em Assets</h2>
      {/* Imagem em Assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name='Kaian'/>
      {/* desestructuring em props */}
      <CarDetails brand="VW" km={1000} color="Azul" />
      </div>
  )
}

export default App;
