import "./App.css";

import LeftSide from "./components/LeftSide";
import Header from "./components/Header";
import RightSide from "./components/RightSide";
import MenuBar from "./components/MenuBar";
function App() {
  return (
    <div className="App">
      <MenuBar />
      <div className="previewCV" id="previewCV">
        <Header />
        <div className="main">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
