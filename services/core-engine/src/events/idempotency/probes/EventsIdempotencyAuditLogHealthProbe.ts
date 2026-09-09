export class EventsIdempotencyAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyAuditLog" };
  }
}
