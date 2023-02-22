import React from 'react'
import MovieList from './pages/Home/MovieList'
import NavBar from './components/NavBar/NavBar'
function App (): JSX.Element {
  return (
      <>
        <NavBar/>
        <MovieList/>
      </>
  )
}

export default App
