import "./App.css";
import { data } from "./data.js";
import CoverPage from "./component/coverpage/CoverPage";
import LabReport from "./component/labReport/LabReport";

function App() {
  return (
    <>
      <Headers/>
        {/* <LabReport data={data}/>
         */}
         <CoverPage data={data}/>
    <Footer/>
    </>
  );
}

export default App;
