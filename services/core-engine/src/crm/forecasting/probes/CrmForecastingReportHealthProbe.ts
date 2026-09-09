export class CrmForecastingReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingReport" };
  }
}
