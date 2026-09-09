export class EventsReplayQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayQueue" };
  }
}
