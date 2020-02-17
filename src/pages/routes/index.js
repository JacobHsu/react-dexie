import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from '../Main'

class Routes extends React.Component {
    renderRoutes() {
        const routes = (
            <React.Fragment>
                <Router >
                <Route path="/" component={Main} />
                </Router>
            </React.Fragment>
        )
        return routes
    }    
    render() {
        return  (
            <div className="App">
                { this.renderRoutes() }
            </div> 
      );
    }
}

export default Routes