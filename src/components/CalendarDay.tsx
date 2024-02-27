import { GameEvent } from "@/types";
import dayjs from "dayjs";
import FadeinImage from "./FadeinImage";

interface ICalendarDay {
  gameEvent: GameEvent | undefined;
  day: { id: string; day: dayjs.Dayjs };
  onClick: () => void;
}

const CalendarDay = ({ gameEvent, day, onClick }: ICalendarDay) => {
  return (
    <div className="text-center shadow h-28 relative" key={`${day.id}`}>
      {gameEvent ? (
        <div
          className="cursor-pointer relative"
          role="button"
          tabIndex={0}
          onClick={onClick}
          style={{ height: "100%" }}
        >
          <FadeinImage
            src={`/assets/${gameEvent?.imageFilenameThumb}.webp`}
            alt={`${gameEvent?.title}`}
          />
          <div className="flex justify-center items-center absolute top-2 right-2 round bg-blue-600 rounded-full text-xs text-white p-1 h-6 w-6">
            {day?.day?.format("D")}
          </div>
        </div>
      ) : (
        <div className="flex justify-center absolute top-2 right-2 round rounded-full text-xs font-medium text-black p-1 h-6 w-6">
          {day?.day?.format("D")}
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
