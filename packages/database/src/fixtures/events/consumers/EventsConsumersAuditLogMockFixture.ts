export function generateEventsConsumersAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
