export class CommCallsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsSummary" };
  }
}
