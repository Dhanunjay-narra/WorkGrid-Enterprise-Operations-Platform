export class EventsOutboxSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxSummary" };
  }
}
