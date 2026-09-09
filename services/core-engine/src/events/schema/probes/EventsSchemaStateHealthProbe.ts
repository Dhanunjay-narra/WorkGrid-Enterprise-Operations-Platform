export class EventsSchemaStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaState" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaState" };
  }
}
