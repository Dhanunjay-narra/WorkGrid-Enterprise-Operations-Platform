export function generateEventsIdempotencyTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
