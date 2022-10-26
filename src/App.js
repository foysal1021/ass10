import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routs } from './Routs/Routs';

function App() {

  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
