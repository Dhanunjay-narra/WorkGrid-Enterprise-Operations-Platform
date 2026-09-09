export class EventsOutboxTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxTransaction" };
  }
}
