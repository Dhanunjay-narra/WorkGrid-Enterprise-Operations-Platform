export function generateEventsSchemaAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
