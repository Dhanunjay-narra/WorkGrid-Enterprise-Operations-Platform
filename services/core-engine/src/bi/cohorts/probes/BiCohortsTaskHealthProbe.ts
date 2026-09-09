export class BiCohortsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsTask" };
  }
}
