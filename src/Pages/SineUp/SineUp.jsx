import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const SineUp = () => {

    const {createUser} = useContext(AuthContext)


    const handlesineUp = e => {
        e.preventDefault();
       const form = e.target; 
       const name = form.name.value; 
       const email = form.email.value; 
       const password = form.password.value; 
       console.log(name, email, password);

       createUser(email, password)
       .then(result => {
        console.log(result.user);
        const time = result.user.metadata.creationTime; 
        const user = {email, createTime: time }; 
        

        fetch('https://espresso-emporium-server-6xqe1i7nh-shamim-rezas-projects.vercel.app/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('save user in data base')
        })

        alert("register success Fully") 
       })
       .catch(error => console.error(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-center mt-6 text-2xl">SineUP</h2>
          <form onSubmit={handlesineUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Sine UP</button>
            </div>
          </form>
          <p className="text-center">Please <Link to='/login' className="text-red-600">Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SineUp;