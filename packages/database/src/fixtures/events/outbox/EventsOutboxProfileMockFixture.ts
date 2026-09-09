export function generateEventsOutboxProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
