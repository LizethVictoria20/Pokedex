import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState'

const API = 'https://pokeapi.co/api/v2/pokemon/?limit=2'

const App = () => {

  const initialState = useInitialState(API)


  return initialState.length === 0 ? <h1>Loading...</h1> : (
    < div >
      <Header />
      <Search />

      <Categories title='Trends'>
        <Carousel>
          {
            console.log(initialState)
          }
        </Carousel>
      </Categories>
      <Footer />
    </div >
  )
}
export default App;
