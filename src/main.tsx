import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './routes/Homepage'
import About from './routes/About'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
  </React.StrictMode>
)
