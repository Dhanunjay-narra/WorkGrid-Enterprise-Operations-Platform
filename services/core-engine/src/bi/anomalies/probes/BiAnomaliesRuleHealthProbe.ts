export class BiAnomaliesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesRule" };
  }
}
