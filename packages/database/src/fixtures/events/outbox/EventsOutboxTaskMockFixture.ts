export function generateEventsOutboxTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
