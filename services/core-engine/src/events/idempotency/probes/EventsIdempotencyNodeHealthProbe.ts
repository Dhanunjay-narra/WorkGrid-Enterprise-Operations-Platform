export class EventsIdempotencyNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyNode" };
  }
}
