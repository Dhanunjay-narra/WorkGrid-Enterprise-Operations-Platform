export class EventsIdempotencyTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyTransaction" };
  }
}
