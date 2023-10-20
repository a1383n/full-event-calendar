import { DailyGrid } from '../components/dailyGrid.jsx'
import { useCounter } from '../contex-injector/contex.jsx'
import { SourceEvent } from '../api/EventImpl.js'
import { CalendarHeader } from './CalendarHeader/CalendarHeader.jsx'
import { createEffect, createMemo } from 'solid-js'

export function App() {
  const data = useCounter()

  function onEventUpdate(event: SourceEvent) {
    data.inctence.updateEvent(event.id, event)
  }

  function onDateChange(d: Date) {
    data.inctence.changeInitialDate(d.toISOString())
  }

  const filteredEvents = createMemo(() =>
    data.inctence.getEventForAdate(data.store.events, new Date(data.store.initialDate))
  )

  return (
    <>
      <div style="margin-top:200px;margin-bottom:200px">
        <CalendarHeader
          headerDate={new Date(data.store.initialDate)}
          timeZone={data.store.timeZone}
          calendar="persian"
          onDateChange={onDateChange}
        />
        <DailyGrid onEventUpdate={onEventUpdate} events={filteredEvents()} />
      </div>
    </>
  )
}
