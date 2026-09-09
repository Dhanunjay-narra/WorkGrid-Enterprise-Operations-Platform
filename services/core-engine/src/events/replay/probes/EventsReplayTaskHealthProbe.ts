export class EventsReplayTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayTask" };
  }
}
