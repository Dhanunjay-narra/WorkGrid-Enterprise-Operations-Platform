export function generateEventsIdempotencyConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
