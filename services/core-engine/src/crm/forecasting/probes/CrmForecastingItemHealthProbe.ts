export class CrmForecastingItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingItem" };
  }
}
