
import { useState } from "react";
import axios from "axios";


var APIRequest = () => {

  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/email", { email });
      setState("SUCCESS");
    } catch (e: any) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (

    <div className="flex flex-col items-center justify-between align-middle">
     <a className="font-bold self">Sign up for updates</a>
      {/*<a className="absolute bottom-5 left-10 mt-[0.2rem] text-white/[0.5] z-50 hover:hidden">IMmari@nerv.company</a>*/}

      
        <div className="flex flex-row w-min rounded-full border-slate-600 bg-white border-2  mt-2">
          <label className="absolute mt-[0.2rem] text-black/[0.5]  z-50 hover:hidden"></label>

          <input
          className="text-slate-600 pl-6 pr-24  rounded-full"
          type="email"
          placeholder="MarinK@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />


          <button
          className={`ml-[-90px] rounded-full bg-slate-600  px-5 py-1  ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
          >
          Submit
          </button>
        </div>

        {state === "ERROR" && (
        <p className="relative  w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="relative  w-1/2 mt-2 text-green-600">Success!</p>
      )}

    </div>


    
  );
};

export default APIRequest;