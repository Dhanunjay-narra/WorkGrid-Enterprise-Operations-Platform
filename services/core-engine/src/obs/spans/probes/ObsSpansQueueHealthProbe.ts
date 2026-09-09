export class ObsSpansQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansQueue" };
  }
}
