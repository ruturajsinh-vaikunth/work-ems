import Header from "./Header";
import Sidebar from "./Sidebar";
import '../styles/content.css';
export default function Attendance(){
    return(
        <div>
           <Header/>
           <Sidebar/>
           <div className="main-content">
           Attendance
           </div>
        </div>
    )
}