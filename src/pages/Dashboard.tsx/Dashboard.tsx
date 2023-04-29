import { useLocation } from "react-router-dom";
import AttendanceStatus from "./components/AttendanceStatus";
import { getAttendance } from "../../api/attendance";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const location = useLocation();
  const lectureId = location.pathname.split("/")[1];

  const fetchLecture = async () => {
    try {
      const response = await getAttendance(lectureId);
    } catch (e) {
      console.log(e);
    }
  };

  fetchLecture();

  const people = [
    {
      name: "홍길동",
      studentNumber: "20205093",
      major: "EECS",
      attendanceList: [
        { attendance: "OK", validator: "PROFESSOR", id: 1 },
        { attendance: "OK", validator: "SYSTEM", id: 2 },
        { attendance: "OK", validator: "SYSTEM", id: 3 },
        { attendance: "OK", validator: "SYSTEM", id: 4 },
      ],
    },
    {
      name: "홍길동",
      studentNumber: "20205094",
      major: "EECS",
      attendanceList: [
        { attendance: "OK", validator: "SYSTEM", id: 5 },
        { attendance: "OK", validator: "PROFESSOR", id: 6 },
        { attendance: "OK", validator: "SYSTEM", id: 7 },
        { attendance: "OK", validator: "SYSTEM", id: 8 },
      ],
    },
  ];

  const date = ["4/1", "4/2", "4/3", "4/4"];

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
                  {people.map((person, personIdx) => (
                    <tr
                      key={person.studentNumber}
                      className="divide-x divide-gray-200"
                    >
                      <td
                        className={classNames(
                          personIdx !== people.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {person.name}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== people.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"
                        )}
                      >
                        {person.studentNumber}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== people.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"
                        )}
                      >
                        {person.major}
                      </td>
                      {person.attendanceList.map((a) => (
                        <td
                          key={a.id}
                          className="whitespace-nowrap hidden px-3 py-4 text-sm  lg:table-cell border-b border-gray-200"
                        >
                          <AttendanceStatus
                            value={a.attendance}
                            onChange={(e) => {
                              console.log(e.target.value);
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
