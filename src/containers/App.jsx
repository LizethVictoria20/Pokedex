import React from 'react'
import '../assets/styles/App.scss'
import Header from '../components/Header'
import Search from '../components/Search'


export const App = () => {
  return (
    <div>
      <Header />
      <Search />
    </div>
  )
}

export default App