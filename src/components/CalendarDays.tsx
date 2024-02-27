"use client";

import useGameEvents from "@/hooks/useGameEvents";
import { getWeeks } from "@/utils/date";
import dayjs from "dayjs";
import CalendarDay from "./CalendarDay";
import { useCallback, useMemo, useState } from "react";
import { GameEvent } from "@/types";
import CalendarEventDetails from "./CalendarEventDetails";

interface ICalendarGrid {
  date: dayjs.Dayjs;
}

const CalendarDays = ({ date }: ICalendarGrid) => {
  const [selectedEvent, setSelectedEvent] = useState<{
    weekId: string;
    gameEvent: GameEvent | undefined;
  }>({ weekId: "", gameEvent: undefined });

  const { gameEventsDateMap } = useGameEvents(
    date.format("YYYY"),
    date.format("MM")
  );

  const handleOnCalendarDayClick = useCallback(
    (weekId: string, gameEvent: GameEvent | undefined) => {
      setSelectedEvent((prevVal) => {
        if (
          prevVal.weekId === weekId &&
          gameEvent?.id === prevVal.gameEvent?.id
        ) {
          return { weekId: "", gameEvent: undefined };
        }

        return { weekId, gameEvent };
      });
    },
    []
  );

  const weeks = useMemo(() => getWeeks(date), [date]);

  return (
    <div className="flex flex-col">
      {weeks.map((week) => (
        <div key={`${week.id}`}>
          <div className="week grid grid-cols-7 gap-2 mb-1">
            {week?.days.map((day: { id: string; day: dayjs.Dayjs }) => {
              const gameEvent = gameEventsDateMap.get(
                day?.day?.format("YYYY-MM-DD")
              );
              return (
                <CalendarDay
                  key={day?.id}
                  day={day}
                  onClick={() => handleOnCalendarDayClick(week.id, gameEvent)}
                  gameEvent={gameEvent}
                />
              );
            })}
          </div>
          {selectedEvent?.weekId === week.id && (
            <CalendarEventDetails gameEvent={selectedEvent.gameEvent} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
