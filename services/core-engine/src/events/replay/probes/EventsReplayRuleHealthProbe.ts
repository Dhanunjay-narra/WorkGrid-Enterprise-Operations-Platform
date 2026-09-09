export class EventsReplayRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayRule" };
  }
}
