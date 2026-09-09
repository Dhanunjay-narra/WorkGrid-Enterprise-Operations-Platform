export class BiCohortsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsQueue" };
  }
}
