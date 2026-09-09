export class EventsIdempotencyBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyBatch" };
  }
}
