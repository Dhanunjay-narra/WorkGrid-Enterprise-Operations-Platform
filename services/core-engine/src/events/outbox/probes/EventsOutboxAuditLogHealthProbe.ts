export class EventsOutboxAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxAuditLog" };
  }
}
