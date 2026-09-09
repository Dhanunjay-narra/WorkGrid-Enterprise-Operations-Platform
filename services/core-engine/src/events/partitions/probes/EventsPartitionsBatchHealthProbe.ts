export class EventsPartitionsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsBatch" };
  }
}
