import { Routes, Route} from 'react-router-dom';

// Pages
import Landing from './Landing';
import Tutoriel from './Tutoriel';

// Components
import Matrix from './Matrix';

function App() {
  return (
    <>
      <Matrix />
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/tutoriel" element={<Tutoriel />} />
      </Routes> 
    </>
  )
}

export default App;
