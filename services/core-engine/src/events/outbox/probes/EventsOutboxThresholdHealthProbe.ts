export class EventsOutboxThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxThreshold" };
  }
}
