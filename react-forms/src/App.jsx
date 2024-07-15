import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  const [prompts, setPrompts] = useState([
    {
      prompt: "",
      answer: "",
      timeStamp: new Date().getTime(),
    },
  ]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handlePrompt = (e, i) => {
    const { name, value } = e.target;
    let newPrompts = [...prompts];
    newPrompts[i][name] = value;
    setPrompts(newPrompts);
  };
  const handleDelete = (e, i) => {
    e.preventDefault();
    let deletePrompts = [...prompts];
    deletePrompts.splice(i, 1);
    setPrompts(deletePrompts);
  };

  const handleAddPrompt = (e) => {
    e.preventDefault();
    setPrompts([
      ...prompts,
      {
        prompt: "",
        answer: "",
        timeStamp: new Date().getTime(),
      },
    ]);
  };

  console.log(userInfo);
  console.log(prompts);
  return (
    <>
      <h1 className="text-3xl text-center my-4">06-React Forms</h1>
      <form
        action=""
        className=" md:w-full max-w-[40rem] w-[20rem] flex-col flex items-center justify-center bg-[url('/falcon.jpeg')] bg-cover bg-opacity-10 rounded-lg mx-auto text-yellow-100 "
      >
        <div className="w-[20rem] md:w-full lg:w-full mx-auto">
          <fieldset className="flex flex-col border border-white gap-2 px-1 my-3 py-3">
            <legend className="text-start font-mono text-lg  py-2">
              About You..
            </legend>
            <div className="flex flex-col items-start">
              <label htmlFor="" className="font-bold text-xl">
                What&apos;s your name?
              </label>
              <div className="flex flex-col gap-y-2 py-2">
                <input
                  name="firstName"
                  id="firstName"
                  onChange={handleInput}
                  type="text"
                  placeholder="First Name"
                  className="px-2 py-3 border rounded-lg"
                />
                <input
                  name="lastName"
                  id="lastName"
                  onChange={handleInput}
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
                name="email"
                id="email"
                onChange={handleInput}
                type="email"
                placeholder="email@example.com"
                className="px-2 py-3 border rounded-lg my-2 "
              />
            </div>
            <div className="flex flex-col items-start ">
              <label htmlFor="" className="font-bold text-xl">
                What&apos;s your date of birth?
              </label>
              <input
                name="dob"
                id="dob"
                onChange={handleInput}
                type="date"
                placeholder="dob."
                className="px-2 py-3 border rounded-lg my-2 w-1/2 text-gray-500 "
              />
            </div>
            <div className="flex flex-col items-start ">
              <label htmlFor="" className="font-bold text-xl">
                What&apos;s your gender?
              </label>
              <select
                name="gender"
                id="gender"
                type="gender"
                placeholder="gender."
                className="px-2 py-3 border rounded-lg my-2 w-1/2 "
                onChange={handleInput}
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
          <fieldset className="flex flex-col border border-white gap-2 px-1 my-3 py-3">
            <legend className="text-start text-xl font-mono mb-2 text-gray-500">
              Prompts..
            </legend>
            {prompts.map((prompt, i) => (
              <div className="flex flex-col items-start" key={prompt.timeStamp}>
                <label htmlFor="" className="text-2xl">
                  Select a prompt
                </label>
                <div className="w-full px-2 ">
                  <div className="flex items-center gap-x-3">
                    <select
                      name="prompt"
                      id="prompt"
                      className="px-2 py-3 border rounded-lg my-2 w-full "
                      onChange={(e) => handlePrompt(e, i)}
                    >
                      <option value="">Select Prompt</option>
                      <option value="Dating me is like...">
                        Dating me is like...
                      </option>
                      <option value="Facts about me that surprise people:">
                        Facts about me that surprise people:
                      </option>
                      <option value="I want someone who can..">
                        I want someone who can..
                      </option>
                      <option value="I spend most of my money on..">
                        I spend most of my money on..
                      </option>
                    </select>
                    <button
                      className="bg-red-500 px-4 w-114 h-10 rounded text-3xl text-white font-bold"
                      onClick={(i) => handleDelete(i)}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <textarea
                      className="w-full px-2 py-2 rounded my-2"
                      name="answer1"
                      id="answer1"
                      placeholder="Let your true colors shine.."
                      rows="5"
                      onChange={(e) => handlePrompt(e, i)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center w-full py-2 px-4">
                  <button
                    className=" bg-cyan-500  px-4 py-2 rounded-lg text-orange-50 border shadow "
                    type="button"
                    onClick={handleAddPrompt}
                  >
                    Add Prompt
                  </button>
                </div>
              </div>
            ))}
          </fieldset>
        </div>
      </form>
    </>
  );
}

export default App;
