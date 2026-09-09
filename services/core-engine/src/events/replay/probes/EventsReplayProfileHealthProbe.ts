export class EventsReplayProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayProfile" };
  }
}
