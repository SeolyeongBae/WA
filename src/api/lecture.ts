import axios from "axios";
import axiosInstance from "./axiosInstance";

type createLectureType = {
  id: string;
  name: string;
  lecture_start_time: string;
  building_id: string;
  attendance_valid_time: string;
};

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

export async function createLectures(lectureInfo: createLectureType) {
  const accessToken = localStorage.getItem("accessToken"); // access 토큰을 가져오는 함수

  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL ?? ""}/v1/lecture`,
    {
      id: lectureInfo.id,
      name: lectureInfo.name,
      lecture_start_time: lectureInfo.lecture_start_time,
      building_id: 1,
      attendance_valid_time: parseInt(lectureInfo.attendance_valid_time),
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}

export async function getTimeTables(lectureID: string) {
  const accessToken = localStorage.getItem("accessToken"); // access 토큰을 가져오는 함수

  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL ?? ""}/v1/lecture/timetable/${lectureID}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}

export async function appendStudents(lectureID: string, studentList: number[]) {
  const accessToken = localStorage.getItem("accessToken"); // access 토큰을 가져오는 함수

  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL ?? ""}/v1/lecture/student/add`,
    {
      lecture_id: lectureID,
      student_id_list: studentList,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}

export async function getStudentsList() {
  const accessToken = localStorage.getItem("accessToken");

  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL ?? ""}/v1/lecture/ES2023/student/list`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
}
