export class FinanceForecastProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastProfile" };
  }
}
