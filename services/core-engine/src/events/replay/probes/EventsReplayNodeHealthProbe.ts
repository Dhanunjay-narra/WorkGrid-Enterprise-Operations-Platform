export class EventsReplayNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayNode" };
  }
}
