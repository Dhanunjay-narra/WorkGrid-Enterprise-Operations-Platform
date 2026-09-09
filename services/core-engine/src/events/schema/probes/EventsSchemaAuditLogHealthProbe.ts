export class EventsSchemaAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaAuditLog" };
  }
}
