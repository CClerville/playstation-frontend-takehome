"use client";

import dayjs from "dayjs";
import Link from "next/link";

interface ICalendarHeader {
  date: dayjs.Dayjs;
}

const CalendarHeader = ({ date }: ICalendarHeader) => {
  const prevMonth = date.subtract(1, "month");
  const nextMonth = date.add(1, "month");

  return (
    <div className="flex border-b border-solid border-gray-300 p-2 pb-5">
      <Link
        className="grow-0"
        href={`/${prevMonth.format("YYYY/MM")}`}
        role="button"
      >
        {"<"}
      </Link>
      <div className="grow text-center font-medium">{`${date.format(
        "MMMM YYYY"
      )}`}</div>
      <Link
        className="grow-0"
        href={`/${nextMonth.format("YYYY/MM")}`}
        role="button"
      >
        {">"}
      </Link>
    </div>
  );
};

export default CalendarHeader;
