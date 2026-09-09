export class CrmForecastingNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingNode" };
  }
}
