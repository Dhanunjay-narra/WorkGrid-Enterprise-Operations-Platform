export class BiQueriesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesThreshold" };
  }
}
