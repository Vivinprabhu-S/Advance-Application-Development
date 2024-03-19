import ReactDOM from 'react-dom/client';

import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Landing from './pages/Auth/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import Plan from './pages/User/Plan';

export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                
                <Route path="/user-plan" element={<Plan/>}></Route>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);