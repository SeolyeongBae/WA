import axios from "axios";

type userSignUpInfo = {
  id?: string;
  password: string;
  name: string;
  major: string;
  phone: string;
  email: string;
};

export async function createUser(userInfo: userSignUpInfo) {
  try {
    const { data } = await axios.post(`https://api.skrrteam.com/v1/professor`, {
      id: parseInt(userInfo.id ?? "0"),
      password: userInfo.password,
      name: userInfo.name,
      major: userInfo.major,
      phone: userInfo.phone,
      email: userInfo.email,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function signIn({
  id,
  password,
}: {
  id: string;
  password: string;
}) {
  const { data } = await axios.post(
    `${process.env.REACT_APP_PROXY_URL ?? ""}/v1/professor/login`,

    {
      password: password,
      id: parseInt(id),
    }
  );

  return data;
}
