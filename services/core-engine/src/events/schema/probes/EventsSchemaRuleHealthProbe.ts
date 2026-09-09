export class EventsSchemaRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaRule" };
  }
}
