export function generateEventsConsumersReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
