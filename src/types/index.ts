import dayjs from "dayjs";

export interface GameEvent {
  id: string;
  launchDate: string;
  title: string;
  summary: string;
  imageFilenameThumb: string;
  imageFilenameFull: string;
  learnMoreLink: string;
  purchaseLink: string;
}

export interface CalendarWeek {
  id: string;
  days: {
    id: string;
    day: dayjs.Dayjs;
  }[];
}

export interface CalendarDay {
  id: string;
  day: dayjs.Dayjs;
}
