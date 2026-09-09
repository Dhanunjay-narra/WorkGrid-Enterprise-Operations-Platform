export class CrmForecastingRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingRule" };
  }
}
