export class EventsPartitionsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsSnapshot" };
  }
}
