export class EventsReplaySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplaySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplaySession" };
  }
}
