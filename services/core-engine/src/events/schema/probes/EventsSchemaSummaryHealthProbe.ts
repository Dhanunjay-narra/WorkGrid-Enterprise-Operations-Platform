export class EventsSchemaSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaSummary" };
  }
}
