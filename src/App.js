import {  useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';

function App() {
//   const [pokemon, setPokemon] = useState("")
  const [random, setRandom] = useState("")
//   const [pokeImg, setPokeImg] = useState("")
//   const [pokeType, setPokeType] = useState("")
  const [dataState, setDataState] = useState([])
 
    async function getPokemon(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    //https://pokeapi.co/api/v2/pokemon/
    const data = await response.json();
    setDataState(data)
    console.log(data)
    // setPokemon(data.name)
    // console.log(typeof(data))
    // setPokeImg(data.sprites.other.home.front_default)
    // setPokeType(data.types[0].type.name)
  }

  

  function buttonClick(){
    const randomNumber = Math.floor(Math.random()*151)
    setRandom(randomNumber)
    getPokemon()
  }
  return [
  <div className='app-container'>
    <div className='header-container'>
      <h1>Piękne zdjęcia Kwadratów z opisami po Łacinie</h1>
      <button onClick={buttonClick}> button</button>
    </div>
    <div className='cards-container'>
    {dataState.slice(0, random).map((poke)=>{
      return <Card  h1={poke.title} src={poke.url}/>
    })}
    </div>
  </div>]
}

export default App;
