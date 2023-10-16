
import { Link } from "react-router-dom";
import bg from "../../assets/more/15.jpg";
import logo from "../../assets/more/logo1.png";

const Navber = () => {
  return (
    <div className="font-rancho">
      <div
        className="md:p-4 p-2"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "cover ",
        }}
      >
        <div className="flex justify-between items-center gap-3">
             <div className="flex justify-center items-center gap-3">
                 <img className="h-10 "  src={logo} alt="" />
                 <h2 className="text-white md:text-3xl text-base ">Espresso Emporium</h2>
             </div>
             <div className="flex justify-center md:gap-4 gap-2 items-center">
                <Link to='/' className="bg-[#D2B48C] px-3 py-1  md:text-xl rounded-md font-bold hover:bg-slate-200">Home</Link>
                <Link to='/addCoffee' className="bg-[#D2B48C] px-3 py-1  md:text-xl rounded-md font-bold hover:bg-slate-200">All Coffees</Link>
                <Link to='/login' className="btn btn-sm md:btn bg-[#D2B48C] border-none">Login</Link>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
