export function generateEventsIdempotencyPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
