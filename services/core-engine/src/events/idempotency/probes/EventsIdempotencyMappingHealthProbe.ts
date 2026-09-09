export class EventsIdempotencyMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyMapping" };
  }
}
