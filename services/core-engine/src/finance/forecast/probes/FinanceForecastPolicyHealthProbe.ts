export class FinanceForecastPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastPolicy" };
  }
}
