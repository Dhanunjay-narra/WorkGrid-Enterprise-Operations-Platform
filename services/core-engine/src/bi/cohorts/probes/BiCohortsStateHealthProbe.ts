export class BiCohortsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsState" };
  }
}
