import { Routes, Route} from 'react-router-dom';

// Pages
import Landing from './Landing';
import Tutoriel from './Tutoriel';
import Pdf3 from './Pdf3';
import Questionnaire from './Questionnaire';

// Components
import Matrix from './Matrix';

function App() {
  return (
    <>
      <Matrix />
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/tutoriel" element={<Tutoriel />} />
        <Route path="/pdf3" element={<Pdf3 />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes> 
    </>
  )
}

export default App;
