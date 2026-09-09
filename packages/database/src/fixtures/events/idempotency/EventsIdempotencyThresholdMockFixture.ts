export function generateEventsIdempotencyThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
