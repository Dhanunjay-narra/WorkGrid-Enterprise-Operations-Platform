export function generateEventsOutboxTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
