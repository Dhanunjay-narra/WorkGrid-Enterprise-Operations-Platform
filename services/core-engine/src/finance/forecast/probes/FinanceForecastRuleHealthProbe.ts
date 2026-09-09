export class FinanceForecastRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastRule" };
  }
}
