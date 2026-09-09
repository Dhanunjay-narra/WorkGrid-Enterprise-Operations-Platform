export function generateEventsIdempotencyQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
