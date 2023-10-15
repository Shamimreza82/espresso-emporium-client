import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

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
        fetch('http://localhost:5000/user', {
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-center mt-6 text-2xl">Login</h2>
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
          <p className="text-center">Please <Link to='/sineup' className="text-red-600">SineUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
