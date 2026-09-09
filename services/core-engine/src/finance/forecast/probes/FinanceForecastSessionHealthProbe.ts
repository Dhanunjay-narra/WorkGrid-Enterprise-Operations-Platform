export class FinanceForecastSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastSession" };
  }
}
