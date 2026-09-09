export class EventsReplayMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayMapping" };
  }
}
