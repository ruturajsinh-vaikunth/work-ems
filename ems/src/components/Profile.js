import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from 'react-redux'
import '../styles/content.css';
export default function Profile(){
    const { userInfo } = useSelector((state) => state.auth)
    return(
        <div>
           <Header/>
           <Sidebar/>
           <div className="main-content">
                Profile
                <div className="card mt-3" style={{ width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">FirstName : {userInfo.firstName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{userInfo.account_type}</h6>
                        <p className="card-text ">Email: {userInfo.email}</p>
                    </div>
                </div>
           </div>
        </div>
    )
}