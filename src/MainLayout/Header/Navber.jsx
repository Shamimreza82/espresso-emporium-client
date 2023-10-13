
import bg from "../../assets/more/15.jpg";
import logo from "../../assets/more/logo1.png";

const Navber = () => {
  return (
    <div>
      <div
        className="md:p-4"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "cover ",
        }}
      >
        <div className="flex justify-center items-center gap-3">
             <img className="h-10" src={logo} alt="" />
             <h2 className="text-white md:text-3xl text-base">Espresso Emporium</h2>
        </div>
      </div>
    </div>
  );
};

export default Navber;
