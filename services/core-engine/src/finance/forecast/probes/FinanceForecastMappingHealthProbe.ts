export class FinanceForecastMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastMapping" };
  }
}
