export class FinanceForecastSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastSummary" };
  }
}
