export function generateEventsIdempotencyTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
