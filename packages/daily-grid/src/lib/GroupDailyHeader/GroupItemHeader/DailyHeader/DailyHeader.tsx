import type { FComponent } from '@full-event-calendar/shared-ts'
import './DailyHeader.scss'
import { formatDayNumber, formatWeekDays, isDateToday, useSlot } from '@full-event-calendar/utils'
import { Show } from 'solid-js'

export interface DailyHeaderProps {
  headerDate: Date
  onDateChange: (d: Date) => void
  calendar: string
  timeZone: string
  locale: string
  slotRenderStore: any
}
// the dates pass throw here are assumed that is not converted by timezone so we convert it here
export const DailyHeader: FComponent<DailyHeaderProps> = (props) => {
  // const da = useSlotState()

  let headerSlot: any = {
    el: null
  }
  function headerClick(e: MouseEvent) {
    e.stopPropagation()
    e.preventDefault()
    props.onDateChange(props.headerDate)
  }
  const dd = () => {
    return { date: props.headerDate, ondataChange: props.onDateChange }
  }
  const { isSlotAvalibale } = useSlot(headerSlot, dd, 'dailyHeader', () => props.headerDate)

  return (
    <>
      <div ref={headerSlot.el}>
        {/* <div ref={headerSlot.el}></div> */}
        <Show when={!isSlotAvalibale}>
          <div class={`fec-daily-header ${isDateToday(props.headerDate) ? 'fec-daily-header-today' : ' '}`}>
            <div class="fec-weekend-narrow">
              {formatWeekDays(props.headerDate, props.calendar, props.timeZone, props.locale)}
            </div>
            <div onClick={headerClick} class="fec-week-day">
              {formatDayNumber(props.locale, props.calendar, props.timeZone, props.headerDate)}
            </div>
          </div>
        </Show>
      </div>
    </>
  )
}
