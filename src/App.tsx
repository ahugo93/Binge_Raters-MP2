import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import ShowIndex from './shows/ShowIdex'
import ShowDetails from './shows/ShowDetails'
import Navigation from './components/Navigation'
import Error404 from './components/Error404'
import NewShowForm from './shows/NewShowForm'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
          <Route path="/" component={Home} />
          <Route path="/shows" component={ShowIndex} />
          <Route path="/shows/new" component={NewShowForm} />
          <Route path="/shows/:id" component={ShowDetails} />
          <Route path="/" component={Error404} />
      </BrowserRouter>
    </>
  );
}

export default App;