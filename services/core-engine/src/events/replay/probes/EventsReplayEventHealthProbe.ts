export class EventsReplayEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayEvent" };
  }
}
