export function generateEventsIdempotencyItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
