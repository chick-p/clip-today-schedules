export type Participant = {
  id: string;
  name: string;
};

export type Event = {
  id: string;
  subject: string;
  start: {
    dateTime: Date;
    timeZone: string;
  };
  end?: {
    dateTime: Date;
    timeZone: string;
  };
  eventMenu: string;
  isAllDay: boolean;
  isStartOnly: boolean;
  eventType: "REGULAR" | "REPEATING" | "ALL_DAY";
  visibilityType: "PUBLIC" | "PRIVATE" | "SET_PRIVATE_WATCHERS";
};
