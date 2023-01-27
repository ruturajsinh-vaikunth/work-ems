import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useGetDetailsQuery } from '../app/services/auth/authService'
import { logout, setCredentials } from '../features/auth/authSlice'
import { FcBusinessman } from 'react-icons/fc'
import '../styles/header.css'
export default function Header(){
    const { userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
  
    // automatically authenticate user if token is found
    const { data, isFetching } = useGetDetailsQuery('userDetails', {
      pollingInterval: 900000, // 15mins
    })
  
    useEffect(() => {
      if (data) dispatch(setCredentials(data))
    }, [data, dispatch])
    return(
        <header>
            <div className='header-status'>
                <div>
                <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={'https://seeklogo.com/images/E/ems-logo-53A1C3E150-seeklogo.com.png'}
                        alt=""
                        style={{ width: '65px', marginLeft: '50px' }}
                        />
                   
                </div>
                </div>
                <div className='cta'>
                    <span className='bta'>
                    {isFetching
                        ? `Fetching your profile...`
                        : userInfo !== null
                        ? <><FcBusinessman size={30}/><small className='text-muted h6 text-capitalize'>{userInfo.firstName}</small></>
                        : <span className='text-muted'></span>
                        }
                    </span>
                
                    <NavLink className='button' to='/login' onClick={() => dispatch(logout())}>
                    Logout
                    </NavLink>
                </div>
            </div>
        </header>
    )
}