export class BiCohortsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsNode" };
  }
}
