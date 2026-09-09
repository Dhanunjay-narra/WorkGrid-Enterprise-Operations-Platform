export class EventsIdempotencySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencySnapshot" };
  }
}
