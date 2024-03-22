import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/Description'
import RecipePhoto from './components/Photos'

function App() {

  return (
    <>
      <div className="App">
        <div className="recipePhotoBlock">
          <RecipePhoto />
          <div>
            <RecipeDescription />
          </div>
        </div>
      </div>
    </>
  )
}

export default App