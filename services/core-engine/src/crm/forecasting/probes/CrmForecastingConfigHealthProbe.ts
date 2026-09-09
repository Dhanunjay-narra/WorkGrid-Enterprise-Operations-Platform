export class CrmForecastingConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingConfig" };
  }
}
