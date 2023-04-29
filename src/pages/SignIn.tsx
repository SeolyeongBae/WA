import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";

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
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="wa"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            WA 로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  사번
                </label>
                <div className="mt-2">
                  <input
                    id="id"
                    name="id"
                    type="text"
                    autoComplete="text"
                    placeholder="사번을 입력하세요"
                    value={values.id}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  비밀번호
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력하세요"
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  로그인
                </button>
              </div>
            </form>
            {error && (
              <div className="text-red-500">
                사번 혹은 비밀번호가 일치하지 않습니다.
              </div>
            )}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            계정이 없으신가요?
            <Link to="/signUp">
              <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                가입하기
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
