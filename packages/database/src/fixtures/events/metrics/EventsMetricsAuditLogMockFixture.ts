export function generateEventsMetricsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_metrics",
    entity: "EventsMetricsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
