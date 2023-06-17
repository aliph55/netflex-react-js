import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();
  const imgUrl =
    "https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/dc8c4de3-8e94-4fd1-98c5-be2055e5d38c/TR-tr-20220606-popsignuptwoweeks-perspective_alpha_website_small.jpg";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          alt="/"
          className="hidden sm:block absolute w-full h-full object-cover"
          src={imgUrl}
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error && <p className="p-3 my-3 bg-red-400">{error}</p>}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 font-bold ">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600 ">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to Netflex?</span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
