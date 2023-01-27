import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from 'axios';
import { useState,useEffect } from 'react'
// import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import Error from '../components/Error'
import '../styles/content.css';
// import cloneDeep from 'lodash/cloneDeep';
// import throttle  from "lodash/throttle";
// import 'rc-pagination/assets/index.css';
// import { useTable} from 'react-table';

export default function Dashboard(){
    // const [customError, setCustomError] = useState(null)
    // const [page, setPage] = useState(1);
    // const [count, setCount] = useState(0);
    // const [pageSize, setPageSize] = useState(3);

    // const pageSizes = [3, 6, 9];
    const [Employees, setEmployees] = useState([]);

    useEffect(() => {
      axios
        .get('http://localhost:5000/api/employee')
        .then((res) => {
            setEmployees(res.data);
        })
        .catch((err) => {
          console.log('Error from ShowBookList');
        });
    }, []);

    console.log(Employees);

  const { loading, userInfo } = useSelector(
    (state) => state.auth
  )

//   const { handleSubmit } = useForm()

  const navigate = useNavigate();
  const [emp, setEmp] = useState({
    firstname: '',
    email: '',
    employee_id: '',
    designation: '',
    birth_date: '',
    gender: '',
    nationality: '',
    marital_status: '',
    experience: '',
    date_of_anniversary: '',
    employee_status: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    account_type: '',
  });

  const onChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/employee', emp)
      .then((res) => {
        setEmp({
                firstname: '',
                email: '',
                employee_id: '',
                designation: '',
                birth_date: '',
                gender: '',
                nationality: '',
                marital_status: '',
                date_of_anniversary: '',
                experience: '',
                employee_status: '',
                address: '',
                city: '',
                state: '',
                country: '',
                pincode: '',
                account_type: '',
        });

        navigate('/Dashboard');
      })
      .catch(() => {
        console.log('Error in CreateEmployee!');
      });
  };


    // const submitForm = (data) => {
    //     // check if passwords match
    //     if (data.password !== data.confirmPassword) {
    //       setCustomError('Password mismatch')
    //       return
    //     }
    //     // transform email string to lowercase to avoid case sensitivity issues in login
    //     data.email = data.email.toLowerCase()
    
    //     dispatch(registerUser(data))
    //   }

    //   const columns = useMemo(
    //     () => [
    //       {
    //         Header: "Firstname",
    //         accessor: "firstName",
    //       },
    //       {
    //         Header: "Email",
    //         accessor: "email",
    //       },
    //       {
    //         Header: "Account_type",
    //         accessor: "account_type",
    //       },
    //       {
    //         Header: "Actions",
    //         accessor: "actions",
    //         Cell: (props) => {
    //           const rowIdx = props.row.id;
    //           return (
    //             <div>
    //               <span>
    //                 <i className="far fa-edit action mr-2"></i>
    //               </span>
    
    //               <span>
    //                 <i className="fas fa-trash action"></i>
    //               </span>
    //             </div>
    //           );
    //         },
    //       },
    //     ],
    //     []
    //   );
    
    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    //   } = useTable({
    //     columns,
    //     data: tutorials,
    //   });

    //   const onChangeSearchTitle = (e) => {
    //     const searchTitle = e.target.value;
    //     setSearchTitle(searchTitle);
    //   };

    if(userInfo.account_type === "Admin"){
        return(
            <div>
               <Header/>
               <Sidebar/>
               <div className="main-content">
                    <p>Dashboard - Admin</p>
                    <p>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Add Employee
                    </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                    <div className="card card-body " style={{ width: '40rem', fontSize: '20px'}}>
                    <form onSubmit={onSubmit} className="row g-3">
                        <div className='col-md-6'>
                            <label htmlFor='firstName'>First Name</label>
                            <input
                            type='text'
                            className='form-control'
                            name='firstname'
                            value={emp.firstname}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='email'>Email</label>
                            <input
                            type='email'
                            className='form-control'
                            name='email'
                            value={emp.email}
                            onChange={onChange}
                            required
                            />
                        </div>
                        {/* <div className='col-md-6'>
                            <label htmlFor='password'>Password</label>
                            <input
                            type='password'
                            className='form-control'
                            alue={emp.firstname}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='email'>Confirm Password</label>
                            <input
                            type='password'
                            className='form-control'
                            {...register('confirmPassword')}
                            required
                            />
                        </div> */}
                        
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Employee_Id</label>
                            <input
                            type='number'
                            className='form-control'
                            name='employee_id'
                            value={emp.employee_id}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Designation</label>
                            <select className='form-control' name='designation' value={emp.designation} onChange={onChange} required>
                                <option>Select Designation</option>
                                <option value='Trainee Software Engineer'>Trainee Software Engineer</option>
                                <option value='Junior Software Engineer'>Junior Software Engineer</option>
                                <option value='Senior Software Engineer'>Senior Software Engineer</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Birth_date</label>
                            <input
                            type='date'
                            className='form-control'
                            name='birth_date'
                            value={emp.birth_date}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Gender</label>
                            <select className='form-control' name='gender' value={emp.gender} onChange={onChange} required >
                                <option>Select Gender</option>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Nationality</label>
                            <input
                            type='text'
                            className='form-control'
                            name='nationality'
                            value={emp.nationality}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Marital_Status</label>
                            <select className='form-control' name='marital_status' value={emp.marital_status} onChange={onChange} required >
                                <option>Select Marital_Status</option>
                                <option value='Married'>Married</option>
                                <option value='Unmarried'>Unmarried</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Date_of_anniversary</label>
                            <input
                            type='date'
                            className='form-control'
                            name='date_of_anniversary'
                            value={emp.date_of_anniversary}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Experience</label>
                            <input
                            type='text'
                            className='form-control'
                            name='experience'
                            value={emp.experience}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Employee_status</label>
                            <select className='form-control' name='employee_status' value={emp.employee_status} onChange={onChange} required >
                                <option>Select Employee_status</option>
                                <option value='Trainee'>Trainee</option>
                                <option value='OnBoard'>OnBoard</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Address</label>
                            <input
                            type='text'
                            className='form-control'
                            name='address'
                            value={emp.address}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>City</label>
                            <input
                            type='text'
                            className='form-control'
                            name='city'
                            value={emp.city}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>State</label>
                            <input
                            type='text'
                            className='form-control'
                            name='state'
                            value={emp.state}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Country</label>
                            <input
                            type='text'
                            className='form-control'
                            name='country'
                            value={emp.country}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Pincode</label>
                            <input
                            type='number'
                            className='form-control'
                            name='pincode'
                            value={emp.pincode}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='account_type'>Account_type</label>
                            <select className='form-control' name='account_type' value={emp.account_type} onChange={onChange} required>
                                <option>Select Account_type</option>
                                <option value='Employee'>Employee</option>
                                <option value='Admin'>Admin</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type='submit' className='button' disabled={loading}>
                                Submit
                            </button>
                        </div>
                    </form>
                    {/* <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                    </form> */}
                    </div>
                    </div>
                    {/* <div className="list row">
                        <div className="col-md-8">
                            <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by title"
                                value={searchTitle}
                                onChange={onChangeSearchTitle}
                            />
                            <div className="input-group-append">
                                <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={findByTitle}
                                >
                                Search
                                </button>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-12 list">
                            <div className="mt-3">
                            {"Items per Page: "}
                            <select onChange={handlePageSizeChange} value={pageSize}>
                                {pageSizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                                ))}
                            </select>

                            <Pagination
                                className="my-3"
                                count={count}
                                page={page}
                                siblingCount={1}
                                boundaryCount={1}
                                variant="outlined"
                                shape="rounded"
                                onChange={handlePageChange}
                            />
                            </div>

                            <table
                            className="table table-striped table-bordered"
                            {...getTableProps()}
                            >
                            <thead>
                                {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                    ))}
                                </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        );
                                    })}
                                    </tr>
                                );
                                })}
                            </tbody>
                            </table>
                        </div>

                        <div className="col-md-8">
                            <button className="btn btn-sm btn-danger" onClick={removeAllTutorials}>
                            Remove All
                            </button>
                        </div>
                    </div> */}
               </div>
            </div>
        )
    }
    else{
        return(
            <div>
               <Header/>
               <Sidebar/>
               <div className="main-content">
                    Dashboard - Emp
                
               </div>
            </div>
        )
    }
}