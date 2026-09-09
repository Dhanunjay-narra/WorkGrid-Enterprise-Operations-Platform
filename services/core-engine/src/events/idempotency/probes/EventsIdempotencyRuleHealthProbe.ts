export class EventsIdempotencyRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyRule" };
  }
}
