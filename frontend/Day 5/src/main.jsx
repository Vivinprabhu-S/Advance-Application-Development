import ReactDOM from 'react-dom/client';

import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Landing from './pages/Auth/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import Plan from './pages/User/Plan';
import Payment from './pages/User/Payment'; 

import AdminDashboard from './pages/Admin/AdminDashboard';

export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                
                <Route path="/user-plan" element={<Plan/>}></Route>
                <Route path="/payment" element={<Payment/>}></Route>

                <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);