export function generateEventsConsumersSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
