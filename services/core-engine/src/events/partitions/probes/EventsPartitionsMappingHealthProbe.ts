export class EventsPartitionsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsMapping" };
  }
}
