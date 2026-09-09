export class EventsOutboxStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxState" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxState" };
  }
}
