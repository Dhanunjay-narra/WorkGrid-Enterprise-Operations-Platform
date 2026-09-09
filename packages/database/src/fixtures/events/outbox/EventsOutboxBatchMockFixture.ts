export function generateEventsOutboxBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
