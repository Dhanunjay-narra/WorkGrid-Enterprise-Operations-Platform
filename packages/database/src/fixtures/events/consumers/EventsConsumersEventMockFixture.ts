export function generateEventsConsumersEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
