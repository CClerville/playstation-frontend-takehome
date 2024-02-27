import { WEEK_DAYS } from "@/constants";
import { useWindowSize } from "@uidotdev/usehooks";

const CalendarWeekDays = () => {
  const windowSize = useWindowSize();
  const showAbbr = windowSize?.width ? windowSize?.width < 768 : false;

  return (
    <div className="grid grid-cols-7 gap-5">
      {WEEK_DAYS.map((weekDay, idx) => (
        <div className="" key={`weekdays-${idx}`}>
          <div className="text-center font-medium my-4">
            {showAbbr ? weekDay.abbr : weekDay.long}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarWeekDays;
