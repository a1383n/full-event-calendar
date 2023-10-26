import type { JSX } from 'solid-js'

export type FComponent<P = {}> = (props: P & { children?: JSX.Element }) => JSX.Element

export interface EventClass {
  start: Date
  end: Date
  name: string
  id: any
  duration: number
  sourceEvent: SourceEvent
  getEventLength(): any
  isAllDay(): any
  calculatePositionAndHeight(): string
  checkOverLap(event: EventClass): Boolean
  convertDateByTimeZone(tz: string): void
}

export interface SourceEvent {
  start: Date
  end: Date
  name: string
  id: any
}