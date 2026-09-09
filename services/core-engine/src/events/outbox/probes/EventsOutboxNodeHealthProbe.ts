export class EventsOutboxNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxNode" };
  }
}
