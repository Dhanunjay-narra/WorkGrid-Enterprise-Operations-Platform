export class BiAnomaliesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesPolicy" };
  }
}
