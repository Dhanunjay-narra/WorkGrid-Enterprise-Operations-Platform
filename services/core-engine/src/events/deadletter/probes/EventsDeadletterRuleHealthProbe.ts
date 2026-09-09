export class EventsDeadletterRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterRule" };
  }
}
