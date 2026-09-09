export class EventsOutboxPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxPolicy" };
  }
}
