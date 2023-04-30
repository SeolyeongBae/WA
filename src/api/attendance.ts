import axios from "axios";

export async function updateAttendance(status: string, attendanceId: string) {
  const accessToken = localStorage.getItem("accessToken"); // access 토큰을 가져오는 함수
  const { data } = await axios.patch(
    `${process.env.REACT_APP_API_URL ?? ""}/v1/attendance/${attendanceId}`,
    {
      status: status,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}

export async function getAttendance(lectureId: string) {
  const accessToken = localStorage.getItem("accessToken"); // access 토큰을 가져오는 함수

  const { data } = await axios.get(
    `${
      process.env.REACT_APP_API_URL ?? ""
    }/v1/attendance/professor/lecture/${lectureId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}
