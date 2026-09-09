export function generateEventsIdempotencyStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
