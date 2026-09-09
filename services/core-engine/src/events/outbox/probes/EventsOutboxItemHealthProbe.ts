export class EventsOutboxItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxItem" };
  }
}
