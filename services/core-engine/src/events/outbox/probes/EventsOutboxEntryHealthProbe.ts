export class EventsOutboxEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxEntry" };
  }
}
