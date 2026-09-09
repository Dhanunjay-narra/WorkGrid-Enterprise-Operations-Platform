export class EventsReplayEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayEntry" };
  }
}
