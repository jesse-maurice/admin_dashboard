import './App.css';

import background from '../src/images/Rectangle 115.png';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="">
      <div className="relative w-full h-screen">
        <img
          className="object-cover w-full h-full "
          src={background}
          alt=""
        ></img>
      </div>
      <div className="absolute inset-0 flex overflow-scroll">
        <div className=" basis-[12%] h-full">
          <Sidebar />
        </div>
        <div className=" basis-[88%]">
          <Navbar />
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;
