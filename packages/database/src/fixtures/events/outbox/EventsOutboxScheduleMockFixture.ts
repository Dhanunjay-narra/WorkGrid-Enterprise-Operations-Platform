export function generateEventsOutboxScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
