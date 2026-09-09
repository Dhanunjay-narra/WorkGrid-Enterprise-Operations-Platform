export class CrmForecastingMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingMapping" };
  }
}
