export function generateEventsIdempotencyRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
