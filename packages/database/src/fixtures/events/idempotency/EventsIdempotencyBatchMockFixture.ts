export function generateEventsIdempotencyBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
