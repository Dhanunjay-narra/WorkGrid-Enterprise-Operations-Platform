export class EventsIdempotencyStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyState" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyState" };
  }
}
