export function generateEventsIdempotencyRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
