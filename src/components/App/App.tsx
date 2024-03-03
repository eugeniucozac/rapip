import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Description from '../../pages/Description/Description';

const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Description />} />
      </Routes>
    );
}

export default App;
