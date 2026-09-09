export function generateEventsConsumersEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
