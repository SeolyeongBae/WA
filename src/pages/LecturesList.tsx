import { useEffect, useState } from "react";

import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

import { RadioGroup } from "@headlessui/react";
import StudentList from "./Dashboard/components/StudentList";
import Dashboard from "./Dashboard/Dashboard";
import {
  appendStudents,
  getLectures,
  getStudentsList,
  getTimeTables,
} from "../api/lecture";
import { getAttendance, updateAttendance } from "../api/attendance";
import Modal from "./Dashboard/components/Modal";

type Lecture = {
  id: string;
  name: string;
  professor_id: number;
  lecture_start_time: string;
  building_id: number;
  attendance_valid_time: number;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function LectureList() {
  const [selected, setSelected] = useState<Lecture | undefined>(undefined);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [dates, setDates] = useState<string[]>([""]);
  const [students, setStudents] = useState<any[]>([]);
  const [studentList, setStudentList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const fetchLectures = async () => {
    try {
      const response = await getLectures();
      setLectures(() => response);
      setSelected(() => response[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  useEffect(() => {
    if (selected) {
      fetchLectureDetail(selected.id);
    }
  }, [selected]);

  const fetchLectureDetail = async (lectureId: string) => {
    try {
      const response = await getAttendance(lectureId);
      const timetable = await getTimeTables(lectureId);
      const studentList = await getStudentsList();
      setStudents(() => response);
      setDates(() => timetable);
      setStudentList(() => studentList);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateAttendance = async (status: string, id: string) => {
    try {
      await updateAttendance(status, id);
      if (selected) {
        fetchLectureDetail(selected.id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onHandleModalSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const userInput = (e.target as any)[0].value
      .split(",")
      .map((e: string) => parseInt(e));
    try {
      if (selected) {
        await appendStudents(selected.id, userInput);
        const studentList = await getStudentsList();
        setStudentList(() => studentList);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen} onSubmit={onHandleModalSubmit} />
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex  lg:w-96 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-light-Gray1 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img className="h-10 w-auto" src={logo} alt="Your Company" />
            <h2 className="mt-6 ml-2 text-center text-md font-light italic leading-9 tracking-tight text-light-Gray3">
              Want Attendance
            </h2>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <div>
                <img
                  className="mx-auto w-1/2 rounded-full"
                  src={profile}
                  alt="profile"
                />
                <div className="mx-auto text-center mt-5">Suman Pandey</div>
              </div>

              {lectures && (
                <RadioGroup onChange={setSelected} value={selected ?? null}>
                  <div className="-space-y-px rounded-2xl bg-white shadow-lg">
                    {lectures.map((setting, settingIdx) => (
                      <RadioGroup.Option
                        key={setting.id}
                        value={setting}
                        className={({ checked }) =>
                          classNames(
                            settingIdx === 0
                              ? "rounded-tl-md rounded-tr-md"
                              : "",
                            settingIdx === lectures.length - 1
                              ? "rounded-bl-md rounded-br-md"
                              : "",
                            checked
                              ? "z-10 border-indigo-200 bg-gradient-to-r to-purpleBlue/25 from-cyanBlue/25 bg-opacity-100"
                              : "border-gray-200",
                            "relative flex cursor-pointer border p-4 focus:outline-none"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <span className="ml-3 flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className={classNames(
                                  checked ? "text-indigo-900" : "text-gray-900",
                                  "block text-md font-medium pt-2"
                                )}
                              >
                                {setting.id}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={classNames(
                                  checked ? "text-indigo-700" : "text-gray-500",
                                  "block text-sm"
                                )}
                              >
                                {setting.name}
                              </RadioGroup.Description>
                            </span>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              )}

              <button
                type="submit"
                className=" mt-10 mb-5 bg-gradient-to-r py-4 px-6 shadow-lg to-purpleBlue from-cyanBlue w-full flex justify-center border border-transparent rounded-3xl text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Lecture
              </button>
            </ul>
          </nav>
        </div>
      </div>

      <main className="py-10 lg:pl-96 h-screen bg-bright-Gray">
        <div className="px-6 sm:px-6 lg:px-8 ">
          {selected === undefined || dates === null ? (
            <div> Please Select Lecture ! </div>
          ) : (
            <>
              <div>
                <span className="inline-flex items-center bg-light-Gray1 px-6 py-2 text-xl font-medium text-light-Gray3 rounded-2xl">
                  {selected.id}
                </span>
                <div className="text-4xl font-bold my-5">{selected.name}</div>
                <StudentList students={studentList} setOpen={setOpen} />
                <Dashboard
                  students={students}
                  date={dates}
                  onChange={handleUpdateAttendance}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
