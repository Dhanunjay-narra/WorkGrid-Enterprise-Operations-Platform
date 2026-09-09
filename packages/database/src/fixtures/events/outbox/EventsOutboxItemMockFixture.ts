export function generateEventsOutboxItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
