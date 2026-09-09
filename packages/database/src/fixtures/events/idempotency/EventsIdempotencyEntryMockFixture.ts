export function generateEventsIdempotencyEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
