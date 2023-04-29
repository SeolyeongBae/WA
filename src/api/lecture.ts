import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function getLectures() {
  const accessToken = localStorage.getItem("accessToken"); // access 토큰을 가져오는 함수

  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL ?? ""}/v1/lecture`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}
