import Navbar from './Navbar'
import BasicPagination from './pagination'
import Visualization from './Visualization';

function App() {
  return (
    
    <div className="App">
          <Navbar/>
          <div className="Contenuto">
            <Visualization/>
          </div>
    </div>
  );
}

export default App;
