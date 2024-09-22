import React from 'react'
import Navbar from '../components/navbar'
import Rotas from './rotas'

import 'bootswatch/dist/simplex/bootstrap.css'
import '../custom.css'

class App extends React.Component {
  render() {
    return (
      <>
      
      <Navbar/>

      <div className="container">
        <Rotas/>
      </div>
      
      </>

    )
  }
}

export default App;
