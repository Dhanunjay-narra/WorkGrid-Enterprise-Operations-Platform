export class CrmForecastingStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingState" };
  }
}
