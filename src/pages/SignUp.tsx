import { useState } from "react";
import { Link } from "react-router-dom";

type signUpType = {
  id?: number;
  password: string;
  name: string;
  major: string;
  phone: string;
  email: string;
};

export default function SignUp() {
  const [values, setValues] = useState<signUpType>({
    id: undefined,
    password: "",
    name: "",
    major: "",
    phone: "",
    email: "",
  });
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [isSamePW, setIsSamePW] = useState<boolean>(false);

  const onSubmit = () => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const checkPasswordTrue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "password") {
      setValues({ ...values, [name]: value });
    } else {
      setCheckPassword(value);
    }
    const compareValue = name === "password" ? checkPassword : values.password;
    if (compareValue === value) {
      setIsSamePW(() => true);
    } else {
      setIsSamePW(() => false);
    }
  };

  const isEntirelyFilled = () => {
    return Object.values(values).every((value) => value !== "");
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
            WA 회원가입
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
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
                    value={values.id}
                    onChange={handleChange}
                    autoComplete="id"
                    placeholder="사번을 입력하세요"
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  이메일
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="example@gist.ac.kr"
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="major"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  전공
                </label>
                <div className="mt-2">
                  <input
                    id="major"
                    name="major"
                    type="text"
                    value={values.major}
                    onChange={handleChange}
                    autoComplete="major"
                    placeholder="EECS"
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  이름
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    autoComplete="name"
                    placeholder="홍길동"
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  전화번호
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={values.phone}
                    onChange={handleChange}
                    autoComplete="phone"
                    placeholder="01012341234"
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
                    value={values.password}
                    onChange={checkPasswordTrue}
                    autoComplete="current-password"
                    placeholder="비밀번호를 입력하세요"
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {(values.password.length <= 7 ||
                  values.password.length > 20) && (
                  <div className="text-red-500">
                    비밀번호는 8자 이상 20자 이하여야 합니다
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="check-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  비밀번호를 다시 입력하세요
                </label>
                <div className="mt-1">
                  <input
                    id="check-password"
                    name="check-password"
                    type="password"
                    autoComplete="current-password"
                    value={checkPassword}
                    onChange={checkPasswordTrue}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {!isSamePW && checkPassword.length !== 0 && (
                  <div className="text-red-500">
                    비밀번호가 일치하지 않습니다.
                  </div>
                )}
              </div>

              {isEntirelyFilled() ? (
                <button
                  onClick={onSubmit}
                  type="submit"
                  className=" mt-10 mb-5 bg-gradient-to-r from-blue-400 to-sky-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  회원가입
                </button>
              ) : (
                <button
                  type="button"
                  className="mt-10 mb-5 bg-gray-400 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded cursor-not-allowed focus:outline-none disabled:opacity-75"
                  disabled
                >
                  회원가입
                </button>
              )}
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            이미 계정이 있으신가요?
            <Link to="/signIn">
              <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                로그인
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
