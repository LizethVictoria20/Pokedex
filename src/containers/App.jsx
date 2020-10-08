import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initialState'

export const App = () => {
  const initialState = useInitialState(API)
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div>
      <Header />
      <Search />

      <Categories title='Trends'>
        <Carousel>
          {
            initialState.trends.map(
              item => <CarouselItem key={item.id} {...item} />
            )
          }
        </Carousel>
      </Categories>

      <Categories title='originals'>
        <Carousel>
          {
            initialState.originals.map(
              item => <CarouselItem key={item.id} {...item} />
            )
          }
        </Carousel>
      </Categories>

      <Footer />
    </div>
  )
}

export default App;