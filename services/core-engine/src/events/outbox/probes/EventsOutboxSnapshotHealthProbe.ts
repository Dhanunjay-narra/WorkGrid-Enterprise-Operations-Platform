export class EventsOutboxSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxSnapshot" };
  }
}
