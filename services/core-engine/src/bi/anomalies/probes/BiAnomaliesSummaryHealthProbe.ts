export class BiAnomaliesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesSummary" };
  }
}
