export class EventsOutboxConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxConfig" };
  }
}
