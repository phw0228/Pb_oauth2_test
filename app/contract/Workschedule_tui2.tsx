import React, { useRef, useEffect } from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

export const Workschedule = () => {
  const calendarRef = useRef<Calendar | null>(null);

  useEffect(() => {
    if (calendarRef.current) {
      const calendarInstance = calendarRef.current.getInstance();

      calendarInstance.on("beforeCreateSchedule", (scheduleData: any) => {
        const { start, end, guide } = scheduleData;
        const schedule = {
          id: String(Math.random()),
          title: "New Event",
          isAllDay: false,
          start,
          end,
          category: "time",
          dueDateClass: "",
          color: "#ffffff",
          bgColor: "#69bb2d",
          dragBgColor: "#69bb2d",
          borderColor: "#69bb2d",
        };
        calendarInstance.createSchedules([schedule]);
        guide.clearGuideElement();
      });

      calendarInstance.on("beforeUpdateSchedule", (e: any) => {
        const { schedule, start, end } = e;

        calendarInstance.updateSchedule(schedule.id, schedule.calendarId, {
          start,
          end,
        });
      });

      calendarInstance.on("beforeDeleteSchedule", (e: any) => {
        const { id, calendarId } = e.schedule;
        calendarInstance.deleteSchedule(id, calendarId);
      });
    }
  }, []);

  return (
    <Calendar
      ref={calendarRef}
      height="800px"
      calendars={[
        {
          id: "0",
          name: "Private",
          bgColor: "#9e5fff",
          borderColor: "#9e5fff",
        },
        {
          id: "1",
          name: "Work",
          bgColor: "#00a9ff",
          borderColor: "#00a9ff",
        },
      ]}
      view="month"
      useCreationPopup={true}
      useDetailPopup={true}
      isReadOnly={false}
      draggable={true}
      resizable={true}
      taskView={false} // 일정 시간 표시 비활성화
      scheduleView={["time"]} // 시간 기준 일정만 표시
    />
  );
};
