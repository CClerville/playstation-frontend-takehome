import { GameEvent } from "@/types";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const useGameEvents = (year: number | string, month: number | string) => {
  const [gameEvents, setGameEvents] = useState<GameEvent[]>();
  const [gameEventsDateMap, setGameEventsDateMap] = useState<
    Map<string, GameEvent>
  >(new Map());
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function getGameEvents() {
      try {
        const response = await fetch(
          `/api/launches?month=${month}&year=${year}`
        );
        const results: { data: GameEvent[] } = await response.json();
        setGameEvents(results?.data);
        const dateMap = new Map();
        results?.data?.forEach((gameEvent) => {
          const date = dayjs(gameEvent.launchDate).format("YYYY-MM-DD");
          dateMap.set(date, gameEvent);
        });

        setGameEventsDateMap(dateMap);
      } catch (err) {
        // Good place for observability tool
        setError("Error retrieving game events");
        console.log(err);
      }
    }

    getGameEvents();
  }, [year, month]);

  return { error, gameEvents, setGameEvents, gameEventsDateMap };
};

export default useGameEvents;
