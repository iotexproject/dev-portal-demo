import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import calendar from "dayjs/plugin/calendar";

export const timeFromNow = (timestamp: string | number): string => {
  dayjs.extend(relativeTime);
  return dayjs(timestamp).fromNow();
};

export const timeCalendar = (timestamp: string | number): string => {
  dayjs.extend(calendar);
  return dayjs(timestamp).calendar();
};
