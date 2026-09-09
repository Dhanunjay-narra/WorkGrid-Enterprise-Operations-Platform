export class BiCohortsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsConfig" };
  }
}
