import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter  , Route, Switch} from 'react-router-dom';
import Homepage from './routes/Homepage'
import Contact from './routes/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/react-tsx" component={Homepage} />
            <Route exact path="/react-tsx/contact" component={Contact} />
          </Switch>  
        </BrowserRouter>
</>
  </React.StrictMode>
)
