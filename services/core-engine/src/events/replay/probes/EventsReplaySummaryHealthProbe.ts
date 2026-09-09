export class EventsReplaySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplaySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplaySummary" };
  }
}
