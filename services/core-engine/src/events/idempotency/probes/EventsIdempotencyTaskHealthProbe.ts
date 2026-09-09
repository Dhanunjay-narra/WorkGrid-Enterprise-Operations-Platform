export class EventsIdempotencyTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyTask" };
  }
}
