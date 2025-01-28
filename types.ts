export interface PlanResponse {
  serverInfo: ServerInfo
  version: string
  systemMessages: any[]
  locations: Location[]
  stopEvents: StopEvent[]
}

export interface ServerInfo {
  controllerVersion: string
  serverID: string
  virtDir: string
  serverTime: string
  calcTime: number
}

export interface Location {
  id: string
  isGlobalId: boolean
  name: string
  disassembledName: string
  coord: number[]
  type: string
  matchQuality: number
  isBest: boolean
  parent: Parent
  assignedStops: AssignedStop[]
  properties: Properties2
}

export interface Parent {
  id: string
  name: string
  type: string
}

export interface AssignedStop {
  id: string
  isGlobalId: boolean
  name: string
  disassembledName: string
  type: string
  coord: number[]
  parent: Parent2
  productClasses: number[]
  connectingMode: number
  properties: Properties
}

export interface Parent2 {
  name: string
  type: string
}

export interface Properties {
  stopId: string
}

export interface Properties2 {
  stopId: string
}

export interface StopEvent {
  realtimeStatus: string[]
  isRealtimeControlled: boolean
  location: Location2
  departureTimePlanned: string
  departureTimeEstimated: string
  transportation: Transportation
  infos: Info[]
  previousLocations: PreviousLocation[]
  onwardLocations: OnwardLocation[]
  properties: Properties11
}

export interface Location2 {
  id: string
  isGlobalId: boolean
  name: string
  disassembledName: string
  type: string
  coord: number[]
  properties: Properties3
  parent: Parent3
}

export interface Properties3 {
  stopId: string
  area: string
  platform: string
  platformName: string
}

export interface Parent3 {
  id: string
  isGlobalId: boolean
  name: string
  disassembledName: string
  type: string
  parent: Parent4
  properties: Properties4
}

export interface Parent4 {
  id: string
  name: string
  type: string
}

export interface Properties4 {
  stopId: string
}

export interface Transportation {
  id: string
  name: string
  disassembledName: string
  number: string
  description: string
  product: Product
  operator: Operator
  destination: Destination
  properties: Properties5
  origin: Origin
}

export interface Product {
  id: number
  class: number
  name: string
  iconId: number
}

export interface Operator {
  code: string
  id: string
  name: string
}

export interface Destination {
  id: string
  name: string
  type: string
}

export interface Properties5 {
  isSTT: boolean
  isROP: boolean
  tripCode: number
  lineDisplay: string
  globalId: string
}

export interface Origin {
  id: string
  name: string
  type: string
}

export interface Info {
  priority: string
  id: string
  version: number
  type: string
  properties: Properties6
  infoLinks: InfoLink[]
}

export interface Properties6 {
  infoType: string
  incidentDateTime: string
}

export interface InfoLink {
  urlText: string
  url: string
  content: string
  subtitle: string
  title: string
  wapText: string
  smsText: string
}

export interface PreviousLocation {
  isGlobalId: boolean
  id: string
  name: string
  disassembledName: string
  type: string
  coord: any[]
  niveau: number
  parent: Parent5
  productClasses: number[]
  properties: Properties8
  departureTimePlanned: string
  departureTimeEstimated: string
  arrivalTimePlanned?: string
  arrivalTimeEstimated?: string
}

export interface Parent5 {
  isGlobalId: boolean
  id: string
  name: string
  disassembledName?: string
  type: string
  parent: Parent6
  properties: Properties7
  coord: any[]
  niveau: number
}

export interface Parent6 {
  id: string
  name: string
  type: string
}

export interface Properties7 {
  stopId: string
}

export interface Properties8 {
  AREA_NIVEAU_DIVA: string
  stoppingPointPlanned: string
  areaGid: string
  area: string
  platform: string
  platformName: string
  zone: string
  AREA_NIVEAU_GIS?: string
}

export interface OnwardLocation {
  isGlobalId: boolean
  id: string
  name: string
  disassembledName: string
  type: string
  coord: any[]
  niveau: number
  parent: Parent7
  productClasses: number[]
  properties: Properties10
  arrivalTimePlanned: string
  departureTimePlanned?: string
  arrivalTimeEstimated: string
  departureTimeEstimated?: string
}

export interface Parent7 {
  isGlobalId: boolean
  id: string
  name: string
  disassembledName?: string
  type: string
  parent: Parent8
  properties: Properties9
  coord: any[]
  niveau: number
}

export interface Parent8 {
  id: string
  name: string
  type: string
}

export interface Properties9 {
  stopId: string
}

export interface Properties10 {
  AREA_NIVEAU_DIVA: string
  AREA_NIVEAU_GIS?: string
  stoppingPointPlanned: string
  areaGid: string
  area: string
  platform: string
  platformName: string
  zone: string
}

export interface Properties11 {
  AVMSTripID: string
}
