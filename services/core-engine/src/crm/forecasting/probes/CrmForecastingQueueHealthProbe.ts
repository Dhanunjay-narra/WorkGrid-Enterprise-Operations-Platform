export class CrmForecastingQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingQueue" };
  }
}
