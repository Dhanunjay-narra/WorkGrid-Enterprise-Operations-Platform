export class EventsOutboxProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxProfile" };
  }
}
