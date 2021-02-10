import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import AboutEachPerson from './components/pages/AboutEachPerson'
import NavBar from './components/pages/NavBar'

let team = [
  {name: 'Jackson', bio: 'From Austin Texas'},
  {name: 'Trisha', bio: 'From LA California'},
  {name: 'Blake', bio: 'From Las Vegas Nevada'},
  {name: 'Patrick', bio: 'From Palm Springs California'}
]

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path = '/aboutus' component={AboutUs} />
      <Route path = '/about:name' render={(props) => <AboutEachPerson {...props} team={team} />} />

    </div>
  );
}

export default App;

