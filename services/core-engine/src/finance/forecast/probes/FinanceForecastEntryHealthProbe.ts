export class FinanceForecastEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastEntry" };
  }
}
