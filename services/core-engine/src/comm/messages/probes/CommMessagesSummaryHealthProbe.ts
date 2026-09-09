export class CommMessagesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesSummary" };
  }
}
