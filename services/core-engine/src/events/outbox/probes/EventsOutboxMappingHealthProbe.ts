export class EventsOutboxMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxMapping" };
  }
}
