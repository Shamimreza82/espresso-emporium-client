import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navber from "../../MainLayout/Header/Navber";
import Footer from "../../MainLayout/Footer/Footer";
import bg from '../../assets/more/1.png'

const Login = () => {

    const {login} = useContext(AuthContext) 


    const handlelogin = e => {
        e.preventDefault();
       const form = e.target; 
       const email = form.email.value; 
       const password = form.password.value; 
       console.log(email, password); 

       login(email, password) 
       .then(result => {
        console.log(result.user);
        alert("login success Fully")
        const user = {
            email, 
            lastLoginAt:  result.user?.metadata?.lastSignInTime
        }

        //update last logged at in the database
        fetch('https://espresso-emporium-server-6xqe1i7nh-shamim-rezas-projects.vercel.app/user', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
  
        })


       })
       .catch(error => console.error(error))

    }


  return (
    <div>
      <Navber></Navber>
      <div className='min-h-[100vh] md:py-10 py-3 md:my-10' style={{backgroundImage: `url(${bg})`,
         backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className=" flex justify-center items-center">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-center mt-6 text-2xl font-bold">Login</h2>
          <form onSubmit={handlelogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mb-">Please <Link to='/sineup' className="text-red-600">SineUp</Link></p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Login;
