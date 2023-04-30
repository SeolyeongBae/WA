import { PlusIcon, TrashIcon } from "@heroicons/react/20/solid";

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

export default function StudentList({ students }: { students: Attendance[] }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="sm:flex sm:items-center ">
        <div className="sm:flex-auto">
          <div className="text-3xl font-bold my-5">Students Management</div>
        </div>

        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className=" mt-10 mb-5 bg-gradient-to-r py-2 px-10 shadow-lg to-purpleBlue from-cyanBlue w-full flex border justify-center items-center border-transparent rounded-3xl text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="w-8" />
            <div>Add Student</div>
          </button>
        </div>
      </div>
      <div className="flow-root rounded-2xl border border-gray-900 bg-white p-10">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 border-b border-gray-900">
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
                      name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900 bg-white ">
                  {students.map((student) => (
                    <tr key={student.student_id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md font-medium text-gray-900 sm:pl-6">
                        {student.student_id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">
                        {student.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">
                        {student.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-md text-red-400">
                        <TrashIcon className="w-8" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">Total : {students.length} Students</div>
    </div>
  );
}
