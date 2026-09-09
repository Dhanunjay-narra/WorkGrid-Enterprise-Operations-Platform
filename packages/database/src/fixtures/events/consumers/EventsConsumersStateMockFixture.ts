export function generateEventsConsumersStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
