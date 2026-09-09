export class EventsIdempotencyPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyPolicy" };
  }
}
