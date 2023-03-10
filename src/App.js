/* eslint-disable react/jsx-no-undef */
import './App.css';
import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragments from './components/Fragments';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App(){

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 343433 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 2456 },
  ]

  function showMessage(){
    console.log("Evento do componente Pai")
  }

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
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco"newCar={false} />
      { /* loop em array de objetos */ }
      <CarDetails 
        key={cars.id}
        brand={cars.brand}
        color={cars.color}
        km={cars.km}
        newCar={cars.newCar}
        />
        <Fragments propsFragment='Teste' />
       <Container>
        <p>E este é o conteudo!</p>
       </Container>
       <ExecuteFunction myFunction={showMessage}/>
      </div>
  )
}

export default App;
