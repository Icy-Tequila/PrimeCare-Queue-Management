import { Link } from "react-router-dom";

const AppointmentForm = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="lg:w-80% w-full mx-8 my-12">
        <div>
          <h1 className="lg:text-3xl text-xl font-bold text-[#428ce2]">
            BOOK AN APPOINTMENT
          </h1>
          <h1 className="text-[#428ce2] lg:text-lg text-sm">
            Please fill out the form below to book your appointment.
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-2 mt-6">
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm ">First Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-[#b9cce1] bg-white text-sm p-1.5"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label className="text-sm ">Last Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-[#b9cce1] bg-white text-sm p-1.5"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm ">Contact Number</label>
              <input
                type="tel"
                maxLength={11}
                placeholder="Enter 11-digit number"
                className="mt-1 block w-full rounded-md border border-[#b9cce1] bg-white text-sm p-1.5"
                required
              />
            </div>
            <div>
              <label className="text-sm ">
                Are you a senior citizen (65 years or older)?
              </label>
              <div class="flex gap-20 mt-2">
                <label class="flex items-center gap-1">
                  <input
                    type="radio"
                    name="senior"
                    value="yes"
                    required
                    class="focus:!outline-none focus:!shadow-none"
                  />
                  Yes
                </label>
                <label class="flex items-center gap-1">
                  <input
                    type="radio"
                    name="senior"
                    value="no"
                    required
                    class="focus:!outline-none focus:!shadow-none"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <label className="text-sm">Select Date and Time</label>
              <input
                type="datetime-local"
                className="mt-1 block w-full rounded-md border border-[#b9cce1] bg-white text-sm p-1.5"
                placeholder="Enter contact number"
                required
              />
            </div>
            <div>
              <label for="serviceType" className="text-sm">
                Service Type:
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                className="mt-1 block w-full rounded-md border border-[#b9cce1] bg-white text-sm p-1.5"
              >
                <option value="" hidden>
                  Select Service Type
                </option>
                <option value="general">General Consultation</option>
                <option value="dental">Dental Checkup</option>
                <option value="vaccination">Vaccination</option>
                <option value="follow-up">Follow-up</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label htmlFor="preferredDoctor" className="text-sm">
                Preferred Doctor or Specialist{" "}
                <span className="text-gray-400">(Optional)</span>
              </label>
              <select
                id="preferredDoctor"
                name="preferredDoctor"
                className="mt-1 block w-full rounded-md border border-[#b9cce1] bg-white text-sm p-1.5"
              >
                <option value="" hidden>
                  Select Preferred Doctor or Specialist
                </option>
                <option value="dr-smith">Dr. John Smith</option>
                <option value="dr-garcia">Dr. Maria Garcia</option>
                <option value="dr-lee">Dr. Daniel Lee</option>
                <option value="dr-chan">Dr. Angela Chan</option>
                <option value="any">No Preference</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/appointment-confirmation" className="bg-[#428ce2] text-white py-1.5 lg:px-20 px-15 rounded-md">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
