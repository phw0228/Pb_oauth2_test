import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export function Workschedule() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        //event1
        {
          id: "1",
          title: "Board Meeting",
          start: "2024-03-12T10:00:00",
          end: "2024-03-15T12:00:00",
          allDay: false,
          url: "http://example.com",
          className: "custom-class",
          editable: true,
          color: "#ff9f89",
          textColor: "#ffffff",
          extendedProps: {
            department: "Marketing",
          },
        },
        //event2
      ]}
    />
  );
}
