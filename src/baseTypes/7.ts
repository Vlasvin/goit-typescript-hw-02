/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(day: DaysOfWeek): boolean {
  let dayOff: boolean = false;
  if (day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday) {
    dayOff = true;
  }
  return dayOff;
}
