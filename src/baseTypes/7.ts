/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const isWeekend = (day: Days): boolean => {
  if (day === Days.SATURDAY || day === Days.SUNDAY) {
    return true;
  }
  return false;
};

console.log(isWeekend(Days.SUNDAY));
