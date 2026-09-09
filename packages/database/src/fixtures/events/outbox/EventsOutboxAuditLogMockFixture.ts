export function generateEventsOutboxAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
