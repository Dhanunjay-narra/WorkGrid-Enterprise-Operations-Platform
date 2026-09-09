export function generateEventsOutboxRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
