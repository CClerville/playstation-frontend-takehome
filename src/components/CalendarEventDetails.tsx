import { GameEvent } from "@/types";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import Link from "next/link";
import FadeinImage from "./FadeinImage";

dayjs.extend(advancedFormat);

interface ICalendarEventDetails {
  gameEvent: GameEvent | undefined;
}

const CalendarEventDetails = ({ gameEvent }: ICalendarEventDetails) => {
  const summary = gameEvent?.summary ?? "";
  const launchDate = dayjs(gameEvent?.launchDate).format("MMMM Do YYYY");
  const learnMoreLink = gameEvent?.learnMoreLink ?? "";
  const orderLink = gameEvent?.purchaseLink ?? "";

  return (
    <div className="h-60 relative mb-1">
      <FadeinImage
        src={`/assets/${gameEvent?.imageFilenameFull}.webp`}
        alt={`${gameEvent?.title}`}
      />
      <div className="text-white absolute max-w-lg top-10 left-10">
        <div
          className="container text-sm max-h-20 text-ellipsis overflow-hidden"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <div className="font-medium text-sm my-4">{`Available ${launchDate}`}</div>
        <div className="text-white font-medium text-xs">
          <Link
            className="rounded-full bg-blue-600 p-2 mr-2 text-center"
            role="button"
            href={learnMoreLink}
          >
            Learn More
          </Link>
          <Link
            className="rounded-full bg-orange-500 p-2 text-center"
            role="button"
            href={orderLink}
          >
            Pre Order now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CalendarEventDetails;
