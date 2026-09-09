export function generateEventsDeadletterAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
