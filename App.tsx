import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Calendar, ICalendarEvent} from 'react-native-big-calendar';
import dayjs from "dayjs";

export default function App() {
  const [events, setEvents] = useState<ICalendarEvent[]>([]);

  // const events = [
  //   {
  //     title: 'Meeting',
  //     start: new Date(2020, 1, 11, 10, 0),
  //     end: new Date(2020, 1, 11, 10, 30),
  //   },
  //   {
  //     title: 'Coffee break',
  //     start: new Date(2020, 1, 11, 15, 45),
  //     end: new Date(2020, 1, 11, 16, 30),
  //   },
  // ]

  const addEvent = (start) => {
    const newEvent = {
      start,
      end: dayjs(start).add(59,'minute').toDate(),
      title: ''
    }
    setEvents([...events,newEvent])
  }

  return (
    <SafeAreaView>
      <Calendar events={events} height={800} onPressCell={addEvent} />
    </SafeAreaView>
  );
}
