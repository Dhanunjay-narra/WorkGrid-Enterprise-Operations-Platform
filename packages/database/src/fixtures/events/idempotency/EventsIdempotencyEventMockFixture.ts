export function generateEventsIdempotencyEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
