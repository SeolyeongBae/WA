import { ATTENDANCE_STATUS } from "../../../constants";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const AttendanceStatus = ({
  onChange,
  value,
  isValidate,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  isValidate: boolean;
}) => {
  return (
    <select
      id="countries"
      value={value}
      onChange={onChange}
      className={classNames(
        isValidate ? "text-gray-500" : "text-red-500 ",
        " border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      )}
    >
      {Object.keys(ATTENDANCE_STATUS).map((status) => {
        const key = ATTENDANCE_STATUS[status as keyof typeof ATTENDANCE_STATUS];
        return (
          <option value={key} key={key}>
            {key}
          </option>
        );
      })}
    </select>
  );
};

export default AttendanceStatus;
