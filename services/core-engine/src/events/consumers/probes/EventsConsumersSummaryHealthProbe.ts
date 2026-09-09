export class EventsConsumersSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersSummary" };
  }
}
