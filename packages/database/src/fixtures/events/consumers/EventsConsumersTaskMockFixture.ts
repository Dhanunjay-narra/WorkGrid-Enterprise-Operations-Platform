export function generateEventsConsumersTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
