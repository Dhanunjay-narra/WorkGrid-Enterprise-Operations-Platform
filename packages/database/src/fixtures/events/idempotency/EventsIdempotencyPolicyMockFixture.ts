export function generateEventsIdempotencyPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
