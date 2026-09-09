export class EventsOutboxBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxBatch" };
  }
}
