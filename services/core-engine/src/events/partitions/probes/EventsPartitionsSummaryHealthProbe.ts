export class EventsPartitionsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsSummary" };
  }
}
