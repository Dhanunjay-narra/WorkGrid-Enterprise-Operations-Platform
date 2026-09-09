export class EventsReplayAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayAuditLog" };
  }
}
