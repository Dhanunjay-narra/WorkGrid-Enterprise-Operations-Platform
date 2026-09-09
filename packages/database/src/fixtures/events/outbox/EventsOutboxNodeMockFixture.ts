export function generateEventsOutboxNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
