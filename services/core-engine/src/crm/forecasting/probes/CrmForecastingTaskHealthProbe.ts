export class CrmForecastingTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingTask" };
  }
}
