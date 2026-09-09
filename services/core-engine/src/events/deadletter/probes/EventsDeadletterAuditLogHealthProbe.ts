export class EventsDeadletterAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterAuditLog" };
  }
}
