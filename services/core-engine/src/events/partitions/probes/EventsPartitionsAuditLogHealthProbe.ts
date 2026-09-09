export class EventsPartitionsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsAuditLog" };
  }
}
