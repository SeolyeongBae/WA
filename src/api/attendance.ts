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

export async function getAttendance({ lectureId }: { lectureId: string }) {
  const { data } = await axiosInstance.get(
    `/v1/attendance/professor/lecture/${lectureId}`
  );

  return data;
}
