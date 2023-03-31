import "./sb-admin-2.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Portal from "./Portal";
import Userlist from "./Components/user/Userlist";
import UserCreate from "./Components/user/UserCreate";
import { useState } from "react";
import UserAction from "./Components/user/UserAction";
import UserView from "./Components/user/UserView";
import UserEdit from "./Components/user/UserEdit";

function App() {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Abcd",
      email: "Abcd@gmail.com",
      im: "Working Profession",
      position: "Full stack developer",
      country: "India",
    },
    {
      id: "2",
      name: "Bcde",
      email: "Bcde@gmail.com",
      im: "Student",
      position: "Doing FSD",
      country: "India",
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/portal" element={<Portal />}>
            <Route
              path="userlist"
              element={<Userlist data={data} setData={setData} />}
            />
            <Route
              path="usercreate"
              element={<UserCreate data={data} setData={setData} />}
            />
            <Route
              path="useraction"
              element={<UserAction data={data} setData={setData} />}
            />
            <Route path="userview/:id" element={<UserView data={data} />} />
            <Route path="useredit/:id" element={<UserEdit data={data} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
