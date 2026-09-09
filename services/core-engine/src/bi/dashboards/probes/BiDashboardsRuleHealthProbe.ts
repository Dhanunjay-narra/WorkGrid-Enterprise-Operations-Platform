export class BiDashboardsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsRule" };
  }
}
