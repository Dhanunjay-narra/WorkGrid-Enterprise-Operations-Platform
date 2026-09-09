export function generateEventsIdempotencyMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
