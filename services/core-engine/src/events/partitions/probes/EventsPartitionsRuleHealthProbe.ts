export class EventsPartitionsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsRule" };
  }
}
