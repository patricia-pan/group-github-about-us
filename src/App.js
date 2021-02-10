import './App.css';
import Home from './components/pages/Home'

let team = [
  {name: 'Jackson', bio: 'From Austin Texas'},
  {name: 'Trisha', bio: 'From LA California'},
  {name: 'Blake', bio: 'From Las Vegas Nevada'},
  {name: 'Patrick', bio: 'From Palm Springs California'}
]

function App() {
  return (
    <div className="App">
      <Home team={team} />
    </div>
  );
}

export default App;

