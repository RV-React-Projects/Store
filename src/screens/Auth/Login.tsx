import React, { useState } from "react";
import MainLogo from "@src/screen_components/Header/MainLogo";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="sm:w-full sm:max-w-sm bg-white dark:bg-gray-200 shadow-md rounded-md px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="items-center flex flex-col">
            <MainLogo />
          </div>
          <h3 className="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900 dark:text-gray-900">
            Welcome Back!
          </h3>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="mt-2">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                className="w-full"
                required
                autoComplete="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                className="w-full"
                required
                autoComplete="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div className="text-sm items-end flex flex-col">
              <Link
                to={""}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div> */}
            <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="h-10 !capitalize"
              >
                Sign in
              </Button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
            Not a member?{" "}
            <Link
              to={"/auth/signup"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
