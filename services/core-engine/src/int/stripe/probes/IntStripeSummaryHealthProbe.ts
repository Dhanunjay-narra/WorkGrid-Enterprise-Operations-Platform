export class IntStripeSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeSummary" };
  }
}
