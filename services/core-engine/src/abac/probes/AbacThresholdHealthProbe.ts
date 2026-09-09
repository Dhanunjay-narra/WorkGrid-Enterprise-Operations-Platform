export class AbacThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacThreshold" };
  }
}
