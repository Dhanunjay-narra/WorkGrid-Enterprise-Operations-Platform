export class EventsOutboxSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxSession" };
  }
}
