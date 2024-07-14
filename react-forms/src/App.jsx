import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl text-center my-4">06-React Forms</h1>
      <form
        action=""
        className="w-full flex-col flex items-center justify-center bg-orange-50"
      >
        <div>
          <fieldset className="flex flex-col min-w-[30rem] border  gap-y-3 px-2 py-3">
            <legend className="text-start font-mono text-lg  py-2">
              About You..
            </legend>
            <div className="flex flex-col items-start">
              <label htmlFor="" className="font-bold text-xl">
                What&apos;s your name?
              </label>
              <div className="flex flex-col gap-y-2 py-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-2 py-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-2 py-3 border rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start ">
              <label htmlFor="" className="font-bold text-xl">
                What&apos;s your Email
              </label>
              <input
                type="email"
                placeholder="Enter Your First Name."
                className="px-2 py-3 border rounded-lg my-2 "
              />
            </div>
            <div className="flex flex-col items-start ">
              <label htmlFor="" className="font-bold text-xl">
                What&apos;s your date of birth?
              </label>
              <input
                type="date"
                placeholder="Enter Your First Name."
                className="px-2 py-3 border rounded-lg my-2 w-1/2"
              />
            </div>
            <div className="flex flex-col items-start ">
              <label htmlFor="" className="font-bold text-xl">
                What&apos;s your gender?
              </label>
              <select
                type="email"
                placeholder="gender."
                className="px-2 py-3 border rounded-lg my-2 w-1/2 "
              >
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="ftm">FTM</option>
                <option value="mtf">MTF</option>
                <option value="non-binary">Non-Binary</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="flex flex-col border gap-2 px-1 py-4 ">
            <legend className="text-start text-xl font-mono mb-2 text-gray-500">
              Prompts..
            </legend>
            <div className="flex flex-col items-start">
              <label htmlFor="" className="text-2xl">
                Select a prompt
              </label>
              <div className="w-1/2 px-2">
                <select
                  name=""
                  id=""
                  className="px-2 py-3 border rounded-lg my-2 w-full"
                >
                  <option value="">Dating me is like...</option>
                </select>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    </>
  );
}

export default App;
