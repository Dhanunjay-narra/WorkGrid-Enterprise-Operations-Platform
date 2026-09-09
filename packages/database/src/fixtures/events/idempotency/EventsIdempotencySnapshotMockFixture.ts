export function generateEventsIdempotencySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
