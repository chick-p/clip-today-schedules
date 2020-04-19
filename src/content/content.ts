import { Event } from "../types/GaroonTypes";
import { GaroonClient } from "./client/GaroonClient";
import moment from "moment";
import "moment/locale/ja";

moment.locale("ja");
const today = moment();

const getScheduleEvents = async (): Promise<Event[]> => {
  const client = new GaroonClient();
  const rangeStart = encodeURIComponent(today.startOf("day").format());
  const rangeEnd = encodeURIComponent(today.endOf("day").format());
  const query = `rangeStart=${rangeStart}&rangeEnd=${rangeEnd}`;
  const { events } = await client.getEvents(query);
  return events;
};

const filterEvents = (events: Event[]): Event[] => {
  return events.filter((event) => {
    return event.eventType !== "ALL_DAY";
  });
};

const formatEvents = (events: Event[]): string => {
  if (!events.length) {
    return `${today.format("YYYY-MM-DD")}\n 予定なし`;
  }
  const formattedEvents = events.map((event: Event) => {
    return `${
      event.start ? moment(event.start.dateTime).format("HH:mm") : "?"
    } - ${event.end ? moment(event.end.dateTime).format("HH:mm") : "?"} ${
      event.eventMenu ? event.eventMenu : "予定あり"
    }`;
  });
  return `${today.format("YYYY-MM-DD")}\n${formattedEvents.join("\n")}`;
};

const toClipBorad = async (): Promise<void> => {
  try {
    const events = filterEvents(await getScheduleEvents());
    const text = formatEvents(events);
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error(err);
  }
};

chrome.runtime.onMessage.addListener(() => {
  toClipBorad();
  return true;
});
