export function generateEventsIdempotencyNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
