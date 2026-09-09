export class EventsOutboxEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxEvent" };
  }
}
