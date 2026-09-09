export function generateEventsIdempotencyAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
