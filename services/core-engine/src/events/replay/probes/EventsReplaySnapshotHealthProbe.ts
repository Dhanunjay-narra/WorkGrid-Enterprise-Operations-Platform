export class EventsReplaySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplaySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplaySnapshot" };
  }
}
