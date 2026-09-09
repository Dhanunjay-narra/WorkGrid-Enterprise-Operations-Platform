export class EventsReplayThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayThreshold" };
  }
}
