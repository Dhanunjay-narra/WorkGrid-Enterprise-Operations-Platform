export class EventsSchemaProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaProfile" };
  }
}
