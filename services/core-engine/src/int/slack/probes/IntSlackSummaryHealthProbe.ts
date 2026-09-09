export class IntSlackSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackSummary" };
  }
}
