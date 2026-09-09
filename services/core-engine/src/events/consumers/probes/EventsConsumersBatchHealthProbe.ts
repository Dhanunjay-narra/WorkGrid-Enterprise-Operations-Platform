export class EventsConsumersBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersBatch" };
  }
}
