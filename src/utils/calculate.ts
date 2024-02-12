import dayjs from "dayjs";

function calculateWorkHours(출근시간: Date, 퇴근시간: Date, 비업무시간: number): number {
  const 출근시각 = dayjs(출근시간);
  const 퇴근시각 = dayjs(퇴근시간);
  const 비업무시간분 = 비업무시간 * 60;

  let 시간차분 = 0;

  if (퇴근시각.isAfter(dayjs("12:30:01", { hour: 12, minute: 30, second: 1 }))) {
    시간차분 = 출근시각.diff(dayjs("11:30:00", { hour: 11, minute: 30, second: 0 }), "minute");
  } else if (퇴근시각.isAfter(dayjs("08:30:01", { hour: 8, minute: 30, second: 1 }))) {
    시간차분 = 출근시각.diff(dayjs("10:00:00", { hour: 10, minute: 0, second: 0 }), "minute");
  } else if (퇴근시각.isAfter(dayjs("04:30:01", { hour: 4, minute: 30, second: 1 }))) {
    시간차분 = 출근시각.diff(dayjs("04:00:00", { hour: 4, minute: 0, second: 0 }), "minute");
  }

  const 근무시간분 = 시간차분 - 비업무시간분;
  return 근무시간분 / 60;
}

// 사용 예시
const 출근시간 = new Date("2024-01-15T08:30:00"); // 출근시간 설정
const 퇴근시간 = new Date("2024-01-15T17:00:00"); // 퇴근시간 설정
const 비업무시간 = 30; // 비업무시간 설정

const 근무시간 = calculateWorkHours(출근시간, 퇴근시간, 비업무시간);
console.log(`근무 시간: ${근무시간} 시간`);
