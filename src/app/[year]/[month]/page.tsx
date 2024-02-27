import Calendar from "@/components/Calendar";

interface ICalendarPage {
  params: {
    year: string;
    month: string;
  };
}

export default function CalendarPage({ params }: ICalendarPage) {
  return <Calendar initialYear={params?.year} initialMonth={params?.month} />;
}
