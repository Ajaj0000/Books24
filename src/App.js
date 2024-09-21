import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routing } from './Components/Routing/Routing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  )
}

export { App }
