export class BiAnomaliesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesThreshold" };
  }
}
