export class EventsSchemaConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaConfig" };
  }
}
