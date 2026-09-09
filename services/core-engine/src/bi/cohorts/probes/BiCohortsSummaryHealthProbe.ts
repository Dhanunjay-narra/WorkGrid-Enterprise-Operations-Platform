export class BiCohortsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsSummary" };
  }
}
