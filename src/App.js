import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp_logo.png';
import TasksList from './components/TasksList';
function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} alt="freecodecamp logo" className="freecodecamp-logo" />
      </div>
     
      <div className="task-list">
        <h1>Task list</h1>
        <TasksList />
        
      </div>
    </div>
  );
}

export default App;
