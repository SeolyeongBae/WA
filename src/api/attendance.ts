import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function updateAttendance({
  status,
  attendanceId,
}: {
  status: string;
  attendanceId: number;
}) {
  const { data } = await axiosInstance.patch(`/v1/attendance/${attendanceId}`, {
    status: status,
  });

  return data;
}

export async function getAttendance(lectureId: string) {
  const accessToken = localStorage.getItem("accessToken"); // access 토큰을 가져오는 함수

  const { data } = await axios.get(
    `${
      process.env.REACT_APP_PROXY_URL ?? ""
    }/v1/attendance/professor/lecture/${lectureId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}
