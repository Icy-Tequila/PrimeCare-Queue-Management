import confirmedSchedule from "../assets/Images/confirmed-schedule.png";
import { Link } from "react-router-dom";

const AppointmentConfirmation = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center w-full m-4">
        <div className="flex justify-center items-center gap-2">
          <div>
            <img src={confirmedSchedule} className="w-10"></img>
          </div>
          <h1 className="lg:text-3xl text-xl font-bold text-[#428ce2] leading-none">
            APPOINTMENT <br /> CONFIRMATION
          </h1>
        </div>
        <div className="mt-5">
          <h1 className="lg:text-lg text-sm mb-4">
            Your booking reference is
            <span className="lg:text-xl font-bold text-sm mb-4 text-[#428ce2]">
              {" "}
              REF-AR102
              <br /> <br />
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="fixed bottom-10">
        <h1 className="text-xs text-center text-[#428ce2] ">
        Please arrive at the clinic at your <br /> scheduled date and time.
      </h1>
      <div className="flex justify-center mt-6">
        <Link to="/appointment" className="bg-[#428ce2] text-white py-1 px-15 rounded-md">
          Got it
        </Link>
      </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
