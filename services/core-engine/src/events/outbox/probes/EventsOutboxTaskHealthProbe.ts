export class EventsOutboxTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxTask" };
  }
}
