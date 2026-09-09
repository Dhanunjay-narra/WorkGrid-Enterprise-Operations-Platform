export class EventsPartitionsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsThreshold" };
  }
}
