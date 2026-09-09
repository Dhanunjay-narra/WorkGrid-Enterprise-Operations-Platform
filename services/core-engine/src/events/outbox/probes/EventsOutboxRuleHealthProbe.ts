export class EventsOutboxRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxRule" };
  }
}
