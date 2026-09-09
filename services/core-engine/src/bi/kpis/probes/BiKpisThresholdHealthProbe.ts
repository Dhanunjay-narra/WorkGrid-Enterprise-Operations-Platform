export class BiKpisThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisThreshold" };
  }
}
