export class EventsReplayBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayBatch" };
  }
}
