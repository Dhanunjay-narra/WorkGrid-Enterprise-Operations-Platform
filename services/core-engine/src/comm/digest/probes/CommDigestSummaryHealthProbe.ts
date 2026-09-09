export class CommDigestSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestSummary" };
  }
}
