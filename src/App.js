import './App.css';
import SideBar from './SideBar';
import TopBar from './TopBar';
import DashBoard from './DashBoard';
import Create_Users from './Create_Users';
import View_User from './View_User';
import Users from './Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./fontawesome-free/css/all.min.css";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar  />
              
              <Routes>
                <Route path='/DashBoard' element={<DashBoard />}></Route>
                <Route path='/Users' element={<Users />}></Route>
                <Route path='/Create_Users' element={<Create_Users />}></Route>
                <Route path='/user/:id' element={<View_User />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
