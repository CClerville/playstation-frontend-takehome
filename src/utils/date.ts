import { CalendarDay, CalendarWeek } from "@/types";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const isValidMonth = (month: string): boolean => {
  const monthToInt = Number(month);
  if (!monthToInt) return false;
  if (monthToInt < 1 || monthToInt > 12) {
    return false;
  }
  return true;
};

export const isValidYear = (year: string): boolean => {
  const yearToInt = Number(year);
  if (!yearToInt) return false;
  if (year.length !== 4) {
    return false;
  }
  return true;
};

/**
 *
 * @param date
 * @returns Array of weeks for the month of the date argument
 */

export const getWeeks = (date: dayjs.Dayjs): CalendarWeek[] => {
  const firstDayOfCurrentMonth = date.startOf("month");
  const numDaysOffset = date.startOf("month").day();

  let days: CalendarDay[] = [{ id: uuidv4(), day: firstDayOfCurrentMonth }];
  const daysInMonth = date.daysInMonth();

  let d = 1;
  while (d < daysInMonth) {
    days.push({
      day: firstDayOfCurrentMonth.add(d, "day"),
      id: uuidv4(),
    });
    d++;
  }

  const offsetDays: CalendarDay[] = [];
  let i = 1;
  while (i <= numDaysOffset) {
    offsetDays.unshift({
      id: uuidv4(),
      day: firstDayOfCurrentMonth.subtract(i, "day"),
    });
    i++;
  }

  days = [...offsetDays, ...days];

  const weeks: CalendarWeek[] = [];
  while (days.length) {
    const week = { id: uuidv4(), days: days.splice(0, 7) };
    weeks.push(week);
  }

  return weeks;
};
