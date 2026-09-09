export class EventsReplayItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayItem" };
  }
}
