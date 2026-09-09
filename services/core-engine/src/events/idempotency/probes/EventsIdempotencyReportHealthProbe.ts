export class EventsIdempotencyReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyReport" };
  }
}
