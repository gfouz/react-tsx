import * as React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components'
import Homepage from './routes/Homepage'
import About from './routes/About'

function App() {

  return (
    <>
     <StyledApp>
      <Router>
    <div>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/about">
        <About/>
      </Route>
    </Switch>
    </div>
  </Router>
     </StyledApp>
    </>
  )
}

export default App;


const StyledApp = styled.div`


`;