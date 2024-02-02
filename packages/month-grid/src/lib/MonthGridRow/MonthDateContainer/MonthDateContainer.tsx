import { FComponent } from '@full-event-calendar/shared-ts'
import { For } from 'solid-js'
import { MonthDateObject } from '../../MonthGrid'
import { formatNumber, getMonthName } from '@full-event-calendar/utils'
import './MonthDateContainer.scss'

interface MonthDateContainerProps {
    locale: string
    monthRowIndex: number // props.monthRowIndex
    monthRowDates: MonthDateObject[] // monthRowArr
    calendar: string // props
    dragClick: any // 
    monthDateMouseDown: any //
    onMouseEnter: any //
}

export const MonthDateContainer: FComponent<MonthDateContainerProps> = (props) => {

  function stopDefault(e: MouseEvent) {
    e.stopPropagation()
    e.preventDefault()
  }

return (
    <>
     <For each={props.monthRowDates}>
        {(date, i) => (
          <div
            onmousedown={[props.monthDateMouseDown, date.date]}
            class="month-container"
            onmousemove={() => props.onMouseEnter(date.date)}
          >
            <div class={`month-day-wrapper ${isDateInsideMonth(date, i(), props.monthRowIndex, props.monthRowDates)}`}>
              <div onmousedown={stopDefault} onclick={(e) => props.dragClick(e, date.date)}>
                <span>{formatNumber(props.locale, date.day as any)}</span>
                <div class="month-name">{getMonthName(props.calendar, date.date, props.locale)}</div>
              </div>
            </div>
          </div>
        )}
      </For>
    </>
  )
}

function isDateInsideMonth(date: MonthDateObject, index: number, monthRowIndex: number, monthRowArr: MonthDateObject[]) {
    if (date.isDateInsideMonth) {
      if (monthRowIndex === 0) {
        return date.month != monthRowArr[index + 1]?.month ? 'month-day-out' : 'month-day-out-no-name'
      } else if (date.isDateInsideMonth) {
        return date.month != monthRowArr[index - 1]?.month ? 'month-day-out' : 'month-day-out-no-name'
      }
    }
    return ''
  }