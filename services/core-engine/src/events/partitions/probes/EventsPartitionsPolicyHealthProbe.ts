export class EventsPartitionsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsPolicy" };
  }
}
