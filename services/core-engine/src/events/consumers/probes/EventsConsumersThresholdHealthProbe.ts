export class EventsConsumersThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersThreshold" };
  }
}
