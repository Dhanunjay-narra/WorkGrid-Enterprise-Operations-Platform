export function generateEventsConsumersScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
