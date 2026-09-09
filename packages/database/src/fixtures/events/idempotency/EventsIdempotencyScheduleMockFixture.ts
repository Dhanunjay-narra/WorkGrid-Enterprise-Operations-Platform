export function generateEventsIdempotencyScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
