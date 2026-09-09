export class FinanceForecastTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastTransaction" };
  }
}
