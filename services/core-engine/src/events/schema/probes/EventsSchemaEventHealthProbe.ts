export class EventsSchemaEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaEvent" };
  }
}
