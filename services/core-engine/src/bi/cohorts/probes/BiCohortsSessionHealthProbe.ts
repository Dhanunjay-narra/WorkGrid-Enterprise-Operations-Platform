export class BiCohortsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsSession" };
  }
}
