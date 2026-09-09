export function generateEventsIdempotencyProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
