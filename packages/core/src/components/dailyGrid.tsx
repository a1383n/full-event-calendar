import './dailyGrid.scss'
import { For, Show, createEffect, createSignal, getOwner, mergeProps } from 'solid-js'
import { EventImpl } from '../api/EventImpl'
import { createLinesOfColome } from './coleLine'
import { userDrager } from './hooks/eventDraging'
import type { DraggeddData } from './hooks/eventDraging'

interface DailyGridProps {
  events: EventImpl[]
  onEventUpdate: (event: SourceEvent) => void
}

export const DailyGrid: Component<DailyGridProps> = (props) => {
  const ColList = () => {
    const finalData = createLinesOfColome(props.events)
    return Object.values(finalData)
  }

  function dragEnd(a: DraggeddData) {
    const sourceE = { ...a.item?.sourceEvent } as SourceEvent
    // sourceE.start =
    sourceE.start = a.startDate
    sourceE.end = a.endDate

    if (a.item) {
      props.onEventUpdate(sourceE)
    }
  }

  const { draggedData, isDragging, itemDragstart } = userDrager(dragEnd)

  function getDragingStyle() {
    return `width : ${draggedData().width};height : ${draggedData().height};left:${draggedData().left} ; transition : ${
      draggedData().animation
    } ;top:${draggedData().top};position:fixed `
  }

  function onmousedownH(item: EventImpl, e: MouseEvent) {
    e.stopPropagation()
    const targetEvent = document.getElementById(`event-${item?.id}`) as HTMLElement

    targetEvent.style.zIndex = '10'
    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseup', mouseup)

    let prevX = e.y
    const targetRect = targetEvent.getBoundingClientRect()
    let endDate: any = null

    function mousemove(e: MouseEvent) {
      let newX = prevX - e.y
      const height = targetRect.height - newX
      targetEvent.style.height = height + 'px'
      let duraction = (height * 60) / 80
      endDate = new Date(item.start.getTime() + duraction * 60000)
      const el = document.getElementById(`event-end-${item?.id}`) as HTMLElement
      el.innerHTML = endDate.toString()
    }

    function mouseup() {
      targetEvent.style.zIndex = '1'
      const sourceE = { ...item?.sourceEvent } as SourceEvent

      if (endDate) {
        sourceE.end = endDate
        props.onEventUpdate(sourceE)
      }
      window.removeEventListener('mousemove', mousemove)
      window.removeEventListener('mouseup', mouseup)
    }
  }

  return (
    <>
      <div class="fec-daily-grid" style="margin-top:200px;margin-bottom:200px">
        <div class="time-range">
          0
          <For each={ColList()}>
            {(key: EventImpl[]) => {
              return (
                <div class="event-colom">
                  <For each={key}>
                    {(item) => {
                      return (
                        <div
                          onMouseDown={[itemDragstart, item]}
                          id={'event-' + item.id}
                          class={` ec-event`}
                          style={item.calculatePositionAndHeight()}
                        >
                          <div> id : {item.id}</div>
                          <div>start :{item.start.toString()}</div>
                          <div>
                            end :<span id={'event-end-' + item.id}>{item.end.toString()}</span>
                          </div>
                          <div onmousedown={[onmousedownH, item]} class="resizer"></div>
                        </div>
                      )
                    }}
                  </For>
                </div>
              )
            }}
          </For>
        </div>

        <div class="time-range">1</div>
        <div class="time-range">2</div>
        <div class="time-range">3</div>
        <div class="time-range">4</div>
        <div class="time-range">5</div>
        <div class="time-range">6</div>
        <div class="time-range">7</div>
        <div class="time-range">8</div>
        <div class="time-range">9</div>
        <div class="time-range">10</div>
        <div class="time-range">11</div>
        <div class="time-range">12</div>
        <div class="time-range">13</div>
        <div class="time-range">14</div>
        <div class="time-range">15</div>
        <div class="time-range">16</div>
        <div class="time-range">17</div>
        <div class="time-range">18</div>
        <div class="time-range">19</div>
        <div class="time-range">20</div>
        <div class="time-range">21</div>
        <div class="time-range">22</div>
        <div class="time-range">23</div>
        <div class="wrapper-container">
          <Show when={isDragging()}>
            <div
              id={'draging-event-' + draggedData().item?.id}
              class={`drag-element ec-event drag-element-grabbiing`}
              style={getDragingStyle()}
            >
              <div> id : {draggedData().item?.id}</div>
              <div>start :{draggedData().startDate.toString()}</div>
              <div>end :{draggedData().endDate.toString()}</div>
            </div>
          </Show>
        </div>
      </div>
    </>
  )
}
