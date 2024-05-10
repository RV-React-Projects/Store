import MainLogo from "@src/screen_components/Header/MainLogo";
import React, { useState } from "react";
import _ from "lodash";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Grid,
  Box,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

type RecurringPriceInterval = "signin" | "signup";

interface phoneProps {
  countryCode: string;
  number: string;
}

export default function Auth() {
  const currentYear = new Date().getFullYear();
  const [active, setActive] = useState<RecurringPriceInterval>("signin");
  const intervals: RecurringPriceInterval[] = ["signin", "signup"];
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<phoneProps>({
    countryCode: "",
    number: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const MakeRecurrenceIntervalButtons: React.FC<{
    currentInterval: RecurringPriceInterval;
    setInterval: (interval: RecurringPriceInterval) => void;
  }> = ({ currentInterval, setInterval }) => {
    return intervals.map((interval) => {
      const className =
        currentInterval === interval
          ? `relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8 transform duration-700 ease-in-out translate-x-0`
          : `ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8 transform duration-700 ease-in-out translate-x-full`;

      const title = interval === "signin" ? "Sign In" : "Sign Up";

      return (
        <button
          key={interval}
          onClick={() => setInterval(interval)}
          type="button"
          className={className}
        >
          {title}
        </button>
      );
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  function handleLogin() {}
  function handleSignUp() {}

  // onClick={() =>
  //   (
  //     document.getElementById("auth_modal") as HTMLDialogElement
  //   ).showModal()
  // }

  return (
    <>
      <dialog id="auth_modal" className="modal">
        <div className="modal-box m-0 p-0">
          <section className="bg-white dark:bg-gray-100 px-10">
            <div className="container flex items-center justify-center mx-auto">
              <form className="w-full max-w-md mb-10">
                <div className="flex justify-center mx-auto mt-10">
                  <MainLogo />
                </div>
                <div className="relative">
                  <div
                    typeof="button"
                    className={`w-[49%] absolute !z-0 h-10 top-1 left-1  ${
                      active === "signin"
                        ? "bg-gray-100 rounded-md py-2 transform duration-700 ease-in-out translate-x-o"
                        : "bg-gray-100 rounded-md py-2 transform duration-700 ease-in-out translate-x-full"
                    }`}
                  />
                  <div className="!z-10 bg-gray-300 rounded-lg b-1 border-gray-700 min-h-12 flex flex-row items-center w-full mt-10 p-1">
                    {_.map(intervals, (item, index) => (
                      <div
                        key={index}
                        onClick={() => setActive(item)}
                        className={`w-1/2 cursor-pointer ${
                          active === item ? "z-10" : ""
                        }`}
                      >
                        <p className="h-full flex flex-row text-center align-middle justify-center">
                          {item === "signin" ? "Sign In" : "Sign Up"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {active === "signin" ? (
                  <Box component="div" sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      id="password outlined-adornment-password"
                      autoComplete="current-password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      size="large"
                      variant="contained"
                      sx={{ mt: 3, mb: 5 }}
                      onClick={handleLogin}
                    >
                      Sign In
                    </Button>
                  </Box>
                ) : (
                  <Box component="div" sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="firstName"
                          label="First Name"
                          type="text"
                          id="firstName"
                          autoComplete="name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="lastName"
                          label="Last Name"
                          type="text"
                          id="lastName"
                          autoComplete="name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <PhoneInput
                      country={"in"}
                      value={phone.countryCode}
                      countryCodeEditable={true}
                      inputStyle={{
                        width: "100%",
                        marginTop: "5px",
                        backgroundColor: "transparent",
                      }}
                      onChange={(value, country: any) => {
                        setPhone({
                          countryCode: country?.dialCode,
                          number: value.substring(country?.dialCode?.length),
                        });
                      }}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="current-password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      size="large"
                      variant="contained"
                      sx={{ mt: 5, mb: 5 }}
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </Button>
                  </Box>
                )}
                <p className="text-center font-medium text-blue-gray-900 md:mb-0">
                  &copy; {currentYear}{" "}
                  <a href="https://material-tailwind.com/">.store</a>. All
                  Rights Reserved.
                </p>
              </form>
            </div>
          </section>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
