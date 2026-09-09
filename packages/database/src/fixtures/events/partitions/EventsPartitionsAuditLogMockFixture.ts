export function generateEventsPartitionsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
