import primeCareLogo from "../assets/Images/primeCare-logo.png";
import { Link } from "react-router-dom";

const AppointmentPatient = () => {
  return (
    <Link to="/appointment-form" className="min-h-screen w-full">
      <div className="w-full min-h-screen flex flex-wrap justify-center items-center">
        <div className="text-center">
          <h1 className="lg:text-lg text-sm mb-4">Welcome to</h1>
          <div className="flex gap-1 items-center justify-center">
            <img
              src={primeCareLogo}
              className="lg:w-7 w-5 lg:h-7 h-5 mt-1"
            ></img>
            <h1 className="lg:text-3xl text-xl font-bold text-[#428ce2]">
              PRIMECARE <span className="text-[#0255a3]">CLINIC</span>
            </h1>
          </div>
        </div>
      </div>
      <h1 className="fixed bottom-20 w-full text-[#428ce2] text-center lg:text-lg text-sm">
        Tap anywhere to start
      </h1>
    </Link>
  );
};

export default AppointmentPatient;
