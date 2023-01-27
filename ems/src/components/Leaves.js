import Header from "./Header";
import Sidebar from "./Sidebar";
import '../styles/content.css';
export default function Leaves(){
    
    return(
        <div>
           <Header/>
           <Sidebar/>
           <div className="main-content">
                Leaves
           </div>
        </div>
    )
}