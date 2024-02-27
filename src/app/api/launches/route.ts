import db from "@/db/data.json";
import { GameEvent } from "@/types";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const month = searchParams.get("month");
  const year = searchParams.get("year");

  if (month && year) {
    const results: GameEvent[] = db.filter((event) => {
      const date = dayjs(event.launchDate);
      return date.format("MM") === month && date.format("YYYY") === year;
    });

    return NextResponse.json({ data: results }, { status: 200 });
  }

  return NextResponse.json({ data: db }, { status: 200 });
}
