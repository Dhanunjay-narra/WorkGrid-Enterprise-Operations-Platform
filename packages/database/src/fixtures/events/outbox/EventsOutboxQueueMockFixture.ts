export function generateEventsOutboxQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
