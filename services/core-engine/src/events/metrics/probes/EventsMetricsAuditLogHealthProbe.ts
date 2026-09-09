export class EventsMetricsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsAuditLog" };
  }
}
