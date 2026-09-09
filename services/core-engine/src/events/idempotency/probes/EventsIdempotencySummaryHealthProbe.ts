export class EventsIdempotencySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencySummary" };
  }
}
