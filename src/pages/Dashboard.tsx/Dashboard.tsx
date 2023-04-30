import { useEffect } from "react";
import AttendanceStatus from "./components/AttendanceStatus";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Lecture = {
  id: string;
  student_id: number;
  lecture_id: string;
  status: string;
  request_ip: string;
  request_location: string;
  validator: string;
  created_at: string;
};

type Attendance = {
  email: string;
  major: string;
  name: string;
  student_id: number;
  attendances: Lecture[];
};

export default function Dashboard({
  date,
  students,
  onChange,
}: {
  date: string[];
  students: Attendance[];
  onChange: (status: string, id: string) => void;
}) {
  useEffect(() => {}, [students]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className="sm:flex sm:items-center ">
        <div className="sm:flex-auto">
          <div className="text-3xl font-bold my-5">Attendance</div>
        </div>
      </div>
      <div className="mt-2 flow-root rounded-2xl border border-gray-900 bg-white p-10">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 border-b border-gray-200">
                <thead className="bg-light-Gray1 rounded-2xl">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-900 sm:pl-6"
                    >
                      student ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-gray-900"
                    >
                      Major
                    </th>

                    {date.map((date) => (
                      <th
                        scope="col"
                        key={date}
                        className="px-3 py-3.5 text-left text-md font-semibold text-gray-900"
                      >
                        {date}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-900 bg-white">
                  {students.map((student, personIdx) => (
                    <tr
                      key={student.student_id}
                      className="divide-x divide-gray-200"
                    >
                      <td
                        className={classNames(
                          personIdx !== students.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {student.name}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"
                        )}
                      >
                        {student.student_id}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"
                        )}
                      >
                        {student.major}
                      </td>
                      {student.attendances.map((a) => (
                        <td
                          key={a.id}
                          className="whitespace-nowrap hidden px-3 py-4 text-sm  lg:table-cell border-b border-gray-200"
                        >
                          <AttendanceStatus
                            value={a.status}
                            onChange={(e) => {
                              onChange(e.target.value, a.id);
                            }}
                            isValidate={a.validator === "SYSTEM"}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
