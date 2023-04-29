import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";
import logo from "../assets/logo.png";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/20/solid";

type signInType = {
  id: string;
  password: string;
};

export default function SignIn() {
  const [values, setValues] = useState<signInType>({
    id: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await signIn({ ...values });
      localStorage.setItem("accessToken", data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(() => true);
    }
  };

  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-bright-Gray">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-20 w-auto font-weight-400"
            src={logo}
            alt="wa"
          />
          <h2 className="mt-6 text-center text-2xl font-light italic leading-9 tracking-tight text-gray-900">
            Want Attendance
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] shadow-2xl rounded-2xl shadow-gray-200">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <div className="relative mt-2 rounded-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserCircleIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="id"
                    name="id"
                    type="text"
                    autoComplete="text"
                    placeholder="Employee Id"
                    value={values.id}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md py-3 pl-10 border-none bg-bright-Gray text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="relative mt-2 rounded-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="block w-full rounded-md  py-3 bg-bright-Gray pl-10 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-400"
                  >
                    Stay signed in
                  </label>
                </div>
              </div>

              <div className="px-6">
                <button
                  type="submit"
                  className=" mt-10 mb-5 bg-gradient-to-r py-4 px-6 shadow-lg to-purpleBlue from-cyanBlue w-full flex justify-center border border-transparent rounded-3xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log In
                </button>
              </div>
            </form>
            {error && (
              <div className="text-red-500">
                사번 혹은 비밀번호가 일치하지 않습니다.
              </div>
            )}

            <div className="relative mt-5">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-400">Or</span>
              </div>
            </div>

            <p className="mt-5 text-center text-sm text-gray-500">
              Don’t have an account yet?
              <Link to="/signUp">
                <span className="font-semibold leading-6 text-swallow hover:text-indigo-500">
                  {"   Register"}
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
