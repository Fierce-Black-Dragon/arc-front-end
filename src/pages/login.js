import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"
const Login = ({ setLogin }) => {
  return (
    <div className="text-gray-600 body-font md:min-w-screen md:h-screen left-0 top-0 inset-0 z-50 fixed">
      <div className="absolute bg-gray-700 opacity-80 inset-0 z-0"></div>
      <div className="relative m-6 my-10 lg:px-20 lg:py-10 " style={{marginTop:"2vh"}} >
        <div style={{maxWidth:"1100px"}} className="container md:min-w-5xl md:h-full  mx-auto justify-center flex flex-wrap sm:flex-nowrap ">
          <div
            className="lg:max-w-lg lg:w-1/3 lg:p-auto sm:w-1/2 py-2 px-5 md:w-1/2 w-full "
            style={{ backgroundColor: "#faaf4f" }}
          >
            <button
              className="petailDetail__cross -px-10 -py-10 "
              onClick={() => {
                setLogin(false);
              }}
            >
              <img src="/Assets/icons/cross.svg" alt="cross" />
            </button>
            <div
              className="md:w-full h-full flex flex-col py-5 -mt-5 lg:-mt-20 text-center justify-center sm:text-left 
"
            >
              <div className="image">
                <img
                  src="/Assets/images/image 8.png"
                  alt="arc"
                  className="w-1/2 mx-auto sm:mx-10 my-auto sm:my-10 sm:mt-5 -mt-6"
                ></img>
              </div>
              <div className="mx-auto sm:mx-10 my-2 sm:text-2xl text-1xl md:font-sans font-bold title-font text-black ">
                Help our furry little friends find a home for themselves.
              </div>
            </div>
          </div>
          <div className="lg:flex-grow w-full lg:font-semibold md:w-3/4 px-5 flex flex-col items-center text-center text-black  bg-white dark:text-white dark:bg-black">
            <div className="relative flex w-full md:justify-center m-auto justify-center">
              <div className="mx-5 md:w-full md:pt-25 lg:px-28 lg:py-10 py-5 lg:pb-16 lg:w-full xl:w-full w-full items-center">
                <p for="hero-field" className="leading-7 text-left text-sm">
                  Email
                </p>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  placeholder="example.mail@yourmail.com"
                  className="w-full bg-gray-100  lg:my-5 rounded border mb-2  bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <p for="hero-field" className="leading-7 text-left">
                  Password
                </p>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  placeholder="password"
                  className="w-full bg-gray-100 rounded-md  lg:my-5 border mb-5  bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <div className="loginSignup">
                  <button className="bg-transparent text-sm lg:my-5 text-center bg-red-500 hover:bg-red-700 md-4 w-4/5 p-auto text-white font-semibold py-2 border border-red-400 rounded-lg">
                    Login
                  </button>

                  <button className="bg-transparent text-sm text-center mx-auto w-4/5  p-auto font-semibold py-2  border border-black dark:border-white rounded-lg">
                    New User? Sign up
                  </button>
                </div>

                <h2 style={{marginBottom:"1vh"}}>OR</h2>
                <button className="md:my-2 flex text-sm lg:my-5 mb-5 py-3 mx-auto text-center font-semibold px-4 border border-black dark:border-white rounded-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google"
                    className="my-auto mr-2"
                    style={{height:"2.5vmin", width:"2.5vmin"}}
                  />
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;