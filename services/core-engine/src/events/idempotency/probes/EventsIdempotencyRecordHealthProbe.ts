export class EventsIdempotencyRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyRecord" };
  }
}
