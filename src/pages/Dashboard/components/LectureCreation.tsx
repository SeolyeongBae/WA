import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createLectures } from "../../../api/lecture";

type createLectureType = {
  id: string;
  name: string;
  lecture_start_time: string;
  building_id: string;
  attendance_valid_time: string;
};

export default function LectureCreation({ refresh }: { refresh: () => void }) {
  const dayofWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeofLecture = ["9:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

  const [values, setValues] = useState<createLectureType>({
    id: "",
    name: "",
    lecture_start_time: "",
    building_id: "1",
    attendance_valid_time: "",
  });

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      createLectures({ ...values });
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">
            Lecture info.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Lecture name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  value={values.name || ""}
                  onChange={handleChange}
                  id="name"
                  autoComplete="name"
                  placeholder="Please enter your lecture name."
                  className="block w-full rounded-md py-3 px-4 text-gray-900 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] placeholder:text-gray-400  focus:ring-indigo-600 sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="id"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Lecture code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="id"
                  id="id"
                  value={values.id || ""}
                  onChange={handleChange}
                  autoComplete="given-name"
                  placeholder="Please enter your lecture code. ex) EC3102"
                  className="block w-full rounded-md border-0  shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] py-3 px-4  text-gray-900  placeholder:text-gray-400 focus:ring-indigo-600 sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="attendance_valid_time"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Attendance Valid Time (min)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="attendance_valid_time"
                  id="attendance_valid_time"
                  value={values.attendance_valid_time || ""}
                  onChange={handleChange}
                  autoComplete="given-name"
                  placeholder="ex) 60"
                  className="block w-full rounded-md shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)]  py-3 px-4 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4 sm:col-start-1  w-full">
              <label
                htmlFor="country"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Lecture time & place
              </label>
              <div className="mt-2 flex">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block rounded-md border-0  py-3 px-4 text-gray-900  shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs "
                >
                  {dayofWeek.map((day) => (
                    <option>{day}</option>
                  ))}
                </select>
                <select
                  id="lecture_start_time"
                  name="lecture_start_time"
                  value={values.lecture_start_time || ""}
                  onChange={handleChange}
                  autoComplete="country-name"
                  className="block rounded-md border-0 py-3 px-4 ml-2 text-gray-900  shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs "
                >
                  {timeofLecture.map((time) => (
                    <option>{time}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  placeholder="Place ex) GIST College Building A"
                  className="block rounded-md w-full border-0 py-3 px-4 ml-2 text-gray-900  shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className=" mb-5 bg-gradient-to-r py-2 px-10 shadow-lg to-purpleBlue from-cyanBlue  flex border justify-center items-center border-transparent rounded-3xl text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <div>Add Lecture</div>
        </button>
      </div>
    </form>
  );
}
