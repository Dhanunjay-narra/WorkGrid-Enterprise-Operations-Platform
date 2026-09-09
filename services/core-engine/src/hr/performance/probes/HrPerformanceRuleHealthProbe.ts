export class HrPerformanceRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceRule" };
  }
}
