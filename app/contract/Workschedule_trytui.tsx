import React, { useState, useEffect } from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import { Post } from "@/types/post";

export const HomePage = ({ posts }: Props) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>{posts?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
};

export const Workschedule = () => {
  const [schedules, setSchedules] = useState([
    {
      id: "1",
      calendarId: "1",
      title: "Meeting",
      category: "time",
      start: new Date("2024-03-15T09:00:00").toISOString(),
      end: new Date("2024-03-17T18:00:00").toISOString(),
      bgColor: "#00a9ff",
    },
  ]);

  useEffect(() => {
    // 초기 스케줄 로드 또는 API로부터 스케줄 받아오는 로직
  }, []);

  return (
    <Calendar
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
      schedules={schedules}
      view="month"
      useCreationPopup={true}
      useDetailPopup={true}
      isReadOnly={false}
      draggable={true}
      resizable={true}
      taskView={false} // 일정 시간 표시 비활성화
      scheduleView={["time"]} // 시간 기준 일정만 표시
      onBeforeCreateSchedule={(scheduleData) => {
        const newSchedule = {
          id: String(Math.random()),
          title: scheduleData.title,
          isAllDay: scheduleData.isAllDay,
          start: scheduleData.start,
          end: scheduleData.end,
          category: scheduleData.isAllDay ? "allday" : "time",
          dueDateClass: "",
          bgColor: "#00a9ff",
          dragBgColor: "#00a9ff",
          borderColor: "#00a9ff",
        };
        setSchedules([...schedules, newSchedule]);
      }}
    />
  );
};
