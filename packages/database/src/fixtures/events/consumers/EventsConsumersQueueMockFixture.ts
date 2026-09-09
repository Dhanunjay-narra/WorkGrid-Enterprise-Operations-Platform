export function generateEventsConsumersQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
