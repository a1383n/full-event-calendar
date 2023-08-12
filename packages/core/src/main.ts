import { Calendar } from './Calendar'

const el = document.getElementById('app') as HTMLElement

const events = [
  {
    start: new Date('Thu Aug 10 2023 15:00:0'),
    end: new Date('Thu Aug 10 2023 17:00:00'),
    id: 7
  },
  {
    start: new Date('Thu Aug 10 2023 13:00:00'),
    end: new Date('Thu Aug 10 2023 17:00:00'),
    id: 8
  },
  {
    start: new Date('Thu Aug 10 2023 13:30:00'),
    end: new Date('Thu Aug 10 2023 15:00:00'),
    id: 9
  },
  {
    start: new Date('Thu Aug 10 2023 14:00:00'),
    end: new Date('Thu Aug 10 2023 16:30:00'),
    id: 10
  },
  {
    start: new Date('Thu Aug 10 2023 16:00:00'),
    end: new Date('Thu Aug 10 2023 18:00:00'),
    id: 11
  },
  {
    start: new Date('Thu Aug 10 2023 12:00:00'),
    end: new Date('Thu Aug 10 2023 14:05:00'),
    id: 6
  },
  {
    start: new Date('Thu Aug 10 2023 16:15:00'),
    end: new Date('Thu Aug 10 2023 22:05:00'),
    id: 12
  },
  {
    start: new Date('Thu Aug 10 2023 17:30:00'),
    end: new Date('Thu Aug 10 2023 22:05:00'),
    id: 13
  },
  {
    start: new Date('Thu Aug 10 2023 17:10:00'),
    end: new Date('Thu Aug 10 2023 19:30:00'),
    id: 14
  },
  {
    start: new Date('Thu Aug 10 2023 17:15:00'),
    end: new Date('Thu Aug 10 2023 20:00:00'),
    id: 15
  },
  {
    start: new Date('Thu Aug 10 2023 19:00:00'),
    end: new Date('Thu Aug 10 2023 22:05:00'),
    id: 16
  },
  {
    start: new Date('Thu Aug 10 2023 20:00:00'),
    end: new Date('Thu Aug 10 2023 23:05:00'),
    id: 17
  }
]

const EventCalendar = new Calendar(el, {
  events: events
})

EventCalendar.render()
// console.log(Calendar)
