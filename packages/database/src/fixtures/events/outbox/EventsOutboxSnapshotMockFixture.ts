export function generateEventsOutboxSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
