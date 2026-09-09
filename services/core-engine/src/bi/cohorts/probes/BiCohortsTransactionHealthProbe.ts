export class BiCohortsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsTransaction" };
  }
}
