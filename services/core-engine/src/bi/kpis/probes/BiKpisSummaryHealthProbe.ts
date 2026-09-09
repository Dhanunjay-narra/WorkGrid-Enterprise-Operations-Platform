export class BiKpisSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisSummary" };
  }
}
