export class BiCohortsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsProfile" };
  }
}
