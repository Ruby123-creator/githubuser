
import Randomuser from "./components/Randomuser";
import User from "./components/User";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="github">
      <User />

      </div>
      <div className="randomuser">
       <Randomuser/>
      </div>
    </div>
  );
}

export default App;




