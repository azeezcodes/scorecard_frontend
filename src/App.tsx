import { Routes, Route } from "react-router-dom";
import { Change } from "./pages/Change_password/Change";
import { Forget } from "./pages/Forget/Forget";
import { Reset } from "./pages/Reset_password/Reset";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/SignUp/Signup";
import { DashboardLayout } from "./pages/DashboardLayout/DashboardLayout";
import DevsWeeklyPerformance from "./pages/DevsWeeklyPerformance/DevsWeeklyPerformance";

function App() {
  return (
    // pre merge ope
//     <Routes>
//       <Route path="/" element={<Forget />} />
//       <Route path="/reset-password/:id/:token" element={<Reset />} />
//       <Route path="/dashboard" element={<DashboardLayout />}></Route>
//       <Route
//         path="/devsweeklyperformance"
//         element={<DevsWeeklyPerformance />}
//       ></Route>
//       <Route path="/update-password" element={<Change />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
// // Azeez
    //  <Routes>
    //     <Route path="/" element={<Forget />} />
    //     <Route path="/reset-password/:id/:token" element={<Reset />} />
    //     <Route path="/update-password" element={<Change/>} />
    //     <Route path="/login" element={<Login/>} />
    //     <Route path="/signup" element={<Signup />} />
    //   </Routes>
 <div>
   <DashboardLayout />
 </div>

  );
}

export default App;
