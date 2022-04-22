import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './routes/Homepage'
import Contact from './routes/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <>
      <Router>
    <div>
    <Switch>
      <Route exact path="/react-tsx">
        <Homepage />
      </Route>
      <Route exact path="/react-tsx/contact">
        <Contact/>
      </Route>
    </Switch>
    </div>
  </Router>
</>
  </React.StrictMode>
)
