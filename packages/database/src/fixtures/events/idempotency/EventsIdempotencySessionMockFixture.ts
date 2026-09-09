export function generateEventsIdempotencySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
