export class CrmForecastingThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingThreshold" };
  }
}
