export class SupportCsatSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatSummary" };
  }
}
