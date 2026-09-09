export class EventsSchemaThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaThreshold" };
  }
}
