export class BiForecastsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsSummary" };
  }
}
