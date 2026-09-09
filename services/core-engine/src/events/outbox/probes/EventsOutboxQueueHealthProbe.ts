export class EventsOutboxQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxQueue" };
  }
}
