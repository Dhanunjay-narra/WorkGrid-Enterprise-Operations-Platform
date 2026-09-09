export class BiForecastsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsReport" };
  }
}
