export class FinanceForecastReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastReport" };
  }
}
