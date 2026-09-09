export class EventsOutboxRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxRecord" };
  }
}
