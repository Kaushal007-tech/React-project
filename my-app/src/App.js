
import './App.css';
import Darkmode from './components/Darkmode';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  return (
    <>
   <Navbar title="TextUtils2" aboutText="about textUtils"/>
   <Alert alert="this is alert"/>
   <div className="container">
   <TextForm heading="Enter the text to analyse"/>
   <Darkmode/>
   </div>
    </>
  );  
}

export default App;
