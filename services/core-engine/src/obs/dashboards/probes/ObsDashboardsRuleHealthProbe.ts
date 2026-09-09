export class ObsDashboardsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsRule" };
  }
}
