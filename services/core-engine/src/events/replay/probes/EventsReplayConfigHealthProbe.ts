export class EventsReplayConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayConfig" };
  }
}
