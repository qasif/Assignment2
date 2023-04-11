import "./App.css";
import Navbar from "./Component/Navbar";
import RightNav from "./Component/RightNav";
import main from './img/preview.png';
function App() {
  return (
    <>
      <Navbar />
      <div className="d-md-flex h-100">
        <div className="w-75 img-outer h-100">
          <img className="w-70 h-100" src={main}/>
        </div>
        <div className="w-25 right-nav">
          <div>
          <RightNav/>
          </div>
         
        </div>
      </div>
    </>
  );
}
export default App;
