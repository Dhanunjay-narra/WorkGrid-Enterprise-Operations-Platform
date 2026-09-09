export class CrmForecastingSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingSummary" };
  }
}
