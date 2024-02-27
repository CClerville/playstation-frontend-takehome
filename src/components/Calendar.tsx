"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { isValidMonth, isValidYear } from "../utils/date";
import CalendarDays from "./CalendarDays";
import CalendarHeader from "./CalendarHeader";
import CalendarWeekDays from "./CalendarWeekDays";

interface ICalendar {
  initialYear?: string;
  initialMonth?: string;
}

const Calendar = ({ initialYear, initialMonth }: ICalendar) => {
  const router = useRouter();
  let date = dayjs();
  const year = initialYear ?? date.format("YYYY");
  const month = initialMonth ?? date.format("MM");

  if (!isValidYear(year.toString()) || !isValidMonth(month.toString())) {
    const currentDateRoute = `/${date.format("YYYY/MM")}`;
    router.push(currentDateRoute);
  }

  date = dayjs(`${year}/${month}`);

  return (
    <div className="bg-white container mx-auto px-10">
      <CalendarHeader date={date} />
      <CalendarWeekDays />
      <CalendarDays date={date} />
    </div>
  );
};

export default Calendar;
