export function generateEventsIdempotencyAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_idempotency",
    entity: "EventsIdempotencyAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
