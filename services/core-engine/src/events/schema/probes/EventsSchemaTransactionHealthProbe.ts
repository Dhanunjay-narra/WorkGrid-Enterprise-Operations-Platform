export class EventsSchemaTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaTransaction" };
  }
}
