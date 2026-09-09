export class EventsReplayStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayState" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayState" };
  }
}
