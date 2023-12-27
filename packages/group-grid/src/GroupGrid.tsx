// Types
import { EventClass, FComponent, SourceEvent } from '@full-event-calendar/shared-ts'
// Solid.js
import { Dynamic } from 'solid-js/web'
import { createMemo, mapArray, mergeProps } from 'solid-js'
// Utils
import { whichColumWasDropped } from './utils/col'

interface GroupGridProps {
  initialDate?: Date
  cols?: columItem[]
  onEventUpdate?: (a: SourceEvent, colNumber: number, currCol: number, isDragend: boolean) => void
  gridComponent: any
  hasCrossGridDrag?:boolean
}

interface columItem {
  events: EventClass[]
  props?: any
}

const defaultProps = {
  events: [],
  initialDate: new Date(),
  cols: [],
  hasCrossGridDrag:true,
  onEventUpdate: () => {}
}

export const GroupGrid: FComponent<GroupGridProps> = (props) => {
  let groupContainerRef
  const mergedProps = mergeProps(defaultProps, props)
  //@ts-ignore
  let colIds = mergedProps.cols.map((_, i) => `cl-${i}`) as string[]

  function eventUpdateProxy(eventSource: SourceEvent, draggedData: any, startingColId: number) {
    // calculate  which colum the event was dropped in
    console.log(eventSource)
    if (draggedData?.isDragg) {
      console.log('this1')
      const colNumber = whichColumWasDropped(colIds, draggedData.mouseX)
      // mergedProps.onEventUpdate(eventSource, startingColId, startingColId, false)
      mergedProps.onEventUpdate(eventSource, colNumber, startingColId, true)
    } else {
      console.log('this2')
      mergedProps.onEventUpdate(eventSource, startingColId, startingColId, false)
    }
  }

  const mappedCols = createMemo(
    mapArray(
      () => mergedProps.cols,
      (item, i) => {
        return (
          <Dynamic
            component={mergedProps.gridComponent}
            onEventUpdate={(a: any, b: any) => {
              eventUpdateProxy(a, b, i())
            }}
            events={item.events}
            id={colIds[i()]}
            container={mergedProps.hasCrossGridDrag ? "group-grid-container" :""}
            {...item.props}
          ></Dynamic>
        )
      }
    )
  )
  return (
    <>
      <div style="display:flex;width:100%;flex: 1;" id="group-grid-container" ref={groupContainerRef}>
        {mappedCols()}
      </div>
    </>
  )
}
