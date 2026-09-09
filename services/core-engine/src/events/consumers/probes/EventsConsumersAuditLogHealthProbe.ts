export class EventsConsumersAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersAuditLog" };
  }
}
