import AttendanceStatus from "./components/AttendanceStatus";

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
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const date = ["4/1", "4/2", "4/3", "4/4"];

export default function Dashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0 divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    이름
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    학번
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    전공
                  </th>

                  {date.map((date) => (
                    <th
                      scope="col"
                      key={date}
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      {date}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
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
  );
}
