import './App.css';
import Gallery from './Gallery.js';
import { Profile } from './Profile.js';
function App() {
  return (
    <div className="App">
     <div className="content">
    <h1>Hello World! This is my first Component</h1>
    <Gallery/>
      <Profile />
     </div>
    </div>
  );
}

export default App;
// Export the function helps to use the component(Which is in short a function) elsewhere